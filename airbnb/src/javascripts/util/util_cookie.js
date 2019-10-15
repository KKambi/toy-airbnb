const ONE_HOUR = 60*60*1000

const util_cookie = {
    TOKEN_COOKIE_OPTIONS: {
        maxAge: ONE_HOUR,
        httpOnly: true
    }
}

module.exports = util_cookie
