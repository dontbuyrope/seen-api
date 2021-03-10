const crypto = require('crypto');

module.exports = {
    getHashedPassword(password) {
        const sha256 = crypto.createHash('sha256');
        const hash = sha256.update(password.toString()).digest('base64');
        return hash;
    }
}
