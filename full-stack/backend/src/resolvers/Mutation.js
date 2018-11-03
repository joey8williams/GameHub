const Mutations = {
  async createStory(parent,args,ctx,info){
    //TODO: Check if authenticated

    const item = await ctx.db.mutation.createStory({
      data:{
        ...args
      }
    }, info);

    return item;
  }
//  createDog(parent, args, context, info){
//    global.dogs = global.dogs || [];
//    //create a dog
//    const newDog = {name:args.name};
//    global.dogs.push(newDog);
//    return newDog;
//  }
};

module.exports = Mutations;