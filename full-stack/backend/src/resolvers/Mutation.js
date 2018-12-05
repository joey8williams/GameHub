const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Mutations = {
  async createStory(parent,args,ctx,info){
    //TODO: Check if authenticated

    const item = await ctx.db.mutation.createStory({
      data:{
        ...args
      }
    }, info);

    return item;
  },
  async signup(parent,args,ctx,info){
    args.email = args.email.toLowerCase();
    //hash password
    const password = await bcrypt.hash(args.password, 10);
    //create user in db
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
        permissions: {set: ['USER']},
      }
    },
    info
    );

    createJwt(ctx,user);


    //return the user
    return user;

  },
  async signin(parent,args,ctx,info){
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password,10);

    const user = ctx.db.query.user({
      where:{
        email:args.email.toString()
      }
    },info)

    //Email not found
    if(user == null) return null;

    //Password incorrect
    if(user.password != password) return null;

    //At this point, the email matches a users email, and the password is valid.
    createJwt(ctx,user);

    //return the user
    return user;
  },
  async signout(parent,args,ctx,info){
    ctx.response.clearCookie('token');
    return {message: "Goodbye"}
  },
  async removeUser(parent,args,ctx,info){
    const result = await ctx.db.mutation.deleteUser({
      where:{
        id: args.id.toString()
      }
    })
    return {message: result}
  }

};

function createJwt(ctx,user){
    //create JWT token
    const token = jwt.sign({userId: user.id},process.env.APP_SECRET);
    //set jwt as cookie on response
    ctx.response.cookie('token',token,{
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 //1 year cookie
    });

    return token;
}

module.exports = Mutations;