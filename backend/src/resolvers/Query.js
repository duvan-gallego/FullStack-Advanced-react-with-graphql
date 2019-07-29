const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'),
    
    /*dogs(parent, args, ctx, info) {
        global.dogs = global.dogs || [];
        return global.dogs;
    }*/
};

module.exports = Query;
