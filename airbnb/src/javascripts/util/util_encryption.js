const crypto = require('crypto')

const util_encrpytion = {
    REPEAT_TIME: 108236,
    PASSWORD_LENGTH: 64,
    HASH_ALGORITHM: 'sha512',

    /**
     * Return salt and encrpyted password as promise object
     * 출처: https://www.zerocho.com/category/NodeJS/post/593a487c2ed1da0018cff95d
     * 
     * @param {string} password password of request from login
     * @return {void} 
     */
    encrypt: function (password) {
        let encryptedPassword;
        let salt;
        salt = crypto.randomBytes(64).toString('base64')
        encryptedPassword = crypto.pbkdf2Sync(password, salt, this.REPEAT_TIME, this.PASSWORD_LENGTH, this.HASH_ALGORITHM)
            .toString('base64')
        return [salt, encryptedPassword]
    },

    /**
     * Check if input password matched to stored password
     *
     * @param {string} inputPassword password of request from login
     * @param {string} inputPassword stored salt of that id
     * @param {string} storedPassword stored password of that id
     * @return {boolean} 
     */
    isSame: function (inputPassword, storedSalt, storedPassword) {
        const encryptedPassword = crypto.pbkdf2Sync(inputPassword, storedSalt, this.REPEAT_TIME, this.PASSWORD_LENGTH, this.HASH_ALGORITHM)
            .toString('base64')
        return encryptedPassword === storedPassword
    }
}

module.exports = util_encrpytion

//for dummy data
// console.log(util_encrpytion.encrypt('123123'))
// console.log(util_encrpytion.encrypt('123123'))