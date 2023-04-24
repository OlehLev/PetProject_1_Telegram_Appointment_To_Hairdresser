module.exports = {
    messageRoute: async (ctx) => {
        if(ctx.message.text === "Записатись") {
            await ctx.telegram.sendMessage(
                ctx.message.chat.id, 
                `The new keyboard with questions and options answer`
            );
            return ctx;
        };
    
        if(ctx.message.text === "Скасувати запис") {
            await ctx.telegram.sendMessage(
                ctx.message.chat.id, 
                `The new keyboard with question: Yes or No`
            );
            return ctx;
        };
    
        if(ctx.message.text === "Наші майстри") {
            await ctx.telegram.sendMessage(
                ctx.message.chat.id, 
                `The message about masters with keyboard - sign up for the master`
            );
            return ctx;
        };
    
        if(ctx.message.text === "Зв'язатись з нами") {
            await ctx.telegram.sendMessage(
                ctx.message.chat.id, 
                `Get user contact for call`
            );
            return ctx;
        };
    
       
        await ctx.telegram.sendMessage(
            ctx.message.chat.id, 
            `I don't understand that you wanted to tell me. Please use options questions`
        );
    }
};
