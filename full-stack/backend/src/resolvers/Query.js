//passes the logic of the query back to the DB directly
const {forwardTo} = require('prisma-binding');

const Query = {
  stories: forwardTo('db'),
  users: forwardTo('db'),
  me(parent,args,ctx,info){
    //check if there is a current userId
    if(!ctx.request.userId){
      return null;
    }
    return ctx.db.query.user({
      where: { id: ctx.request.userId }
    }, info
    );

  }
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
