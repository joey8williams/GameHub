//passes the logic of the query back to the DB directly
const {forwardTo} = require('prisma-binding');

const Query = {
  stories: forwardTo('db'),
//  async stories(parent,args,ctx,info){
//    const stories = await ctx.db.query.stories();
//
//    return stories;
//  }
//  dogs(parent, args, context, info){
//    global.dogs = global.dogs || [];
//    return global.dogs;
//
//  }
};

module.exports = Query;
