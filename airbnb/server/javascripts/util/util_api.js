
const util_api = {
    respondData: (res, data) => {
        res.json({
            success: true,
            data
        })
    },

    respondSucess: (res, message, token = null) => {
        res.json({
            sucess: true,
            message,
            token
        })
    },

    respondFail: (res, message) => {
        res.status(403).json({
            success: false,
            message: message
        })
    },

    respondError: (res, err) => {
        res.status(403).json({
            message: err.message
        })
    }
}

module.exports = util_api