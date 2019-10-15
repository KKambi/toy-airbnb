/*
    POST /api/auth/register
    {
        username,
        password
    }
*/

const authController = {
    register(req, res){
        res.send('register api is working')
    },
    login(req, res){
        res.send('login api is working')
    },
}

module.exports = authController