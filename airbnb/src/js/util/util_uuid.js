const uuidv1 = require('uuid/v1')

const util_uuid = {
    createUniqueId: function(){
        return uuidv1();
    }
}

module.exports = util_uuid