module.exports = {
    checkUserPresent: (ctx, next) => {
        try{
            const userId = ctx.message.chat.id;
            // need to add search the user in DB
            if(!userId){
                ctx.user.flag = true;
            }
            
            next();
        }catch(e) {
            next(console.error("Errrorrrr catch"));
        }
        
    },
    createUser: (ctx, next) => {
        try{
            next();
        }catch(e) {
            next(e);
        }
    }
};
