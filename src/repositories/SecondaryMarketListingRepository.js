const { SecondaryMarketListingModel } = require("./../models");
const BaseRepository = require("./BaseRepository");
const Pagination = require("./../utils/Pagination");
const types = require("./../constants/Collectables");
const purchaseTypes = require("./../constants/PurchaseTypes");

class SecondaryMarketListingRepository extends BaseRepository {
    constructor(props) {
        super(props)
    }

    getModel() {
        return SecondaryMarketListingModel
    }

    async paginate(perPage = 10, page = 1, query = {}) {
        let purchaseType = query.purchaseType ? parseInt(query.purchaseType) : null;
        let userId = query.userId ? parseInt(query.userId) : null;
        let includeIsHiddenFromDropList = query.includeIsHiddenFromDropList === 'true' ? true : false;
        let type = query.type;

        const results = await this.model.query().where(function () {
                if (type
                    && Object.values(types).includes(type)) {
                    this.where('type', type);
                }
                if (userId) {
                    this.where('user_id', userId);
                }
                if (purchaseType
                    && Object.values(purchaseTypes).includes(purchaseType)) {
                    this.where('purchase_type', purchaseType);
                }
                if (!includeIsHiddenFromDropList) {
                    this.where('is_hidden_from_drop_list', false);
                }
            })
            .withGraphFetched('[user, collectable.[tags, media], events]')
            .orderBy('starts_at', 'DESC')
            .page(page - 1, perPage)


        return this.parserResult(new Pagination(results, perPage, page))
    }

    async active() {
        let fromDate = new Date();
        fromDate.setHours(fromDate.getHours() + 1)
        fromDate = fromDate.toISOString();
        console.log("From date => ", fromDate)
        const result = await this.model.query()
            .where('starts_at', '<=', fromDate);

        return this.parserResult(result)
    }

    async findBySlug(contractAddress) {
        const result = await this.model.query()
            .withGraphFetched('[user.[collectables], collectable.[tags, media], events]')
            .where('slug', '=', contractAddress)
            .first();
        if (!result) {
            return null;
        }
        return this.parserResult(result)
    }

    async findById(id) {
        const result = await this.model.query()
            .withGraphFetched('[user.[collectables], collectable.[tags, media], events]')
            .where('id', '=', id)
            .first();
        if (!result) {
            return null;
        }
        return this.parserResult(result)
    }

    async findByConsignmentId(id) {
        const result = await this.model.query()
            .withGraphFetched('[user.[collectables], collectable.[tags, media], events]')
            .where('consignment_id', '=', id)
            .first();
        if (!result) {
            return null;
        }
        return this.parserResult(result)
    }

}

module.exports = new SecondaryMarketListingRepository()