
const util_api = {
    respond: (res, message, jwt = null) => {
        res.json({
            message,
            jwt
        })
    },

    onError: (res, err) => {
        res.status(403).json({
            message: err.message
        })
    }
}

module.exports = util_api