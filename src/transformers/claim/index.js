const BaseTransformer = require("./../BaseTransformer");

class ClaimTransformer extends BaseTransformer {
    transform(claim) {
        return {
            id: claim.id,
            collectable_id: claim.collectable_id,
            contract_address: claim.contract_address
        }
    }
}

module.exports = new ClaimTransformer();