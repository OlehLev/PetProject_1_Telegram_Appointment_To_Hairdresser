const { Keyboard, Key } = require('telegram-keyboard');
// const { message } = require('telegraf/filters');

module.exports = {
    messageRoute: async (ctx) => {
        // console.log(ctx.message.chat.id);
        if(ctx.message.text === "Записатись") {
            
            // const chatId = ctx.message.chat.id;

            const keyboardInline = Keyboard.inline(
                [
                    Key.callback('"Обрати майстра"', 'action1'),
                    Key.callback("Обрати дату", 'action2')                    
                ]
                // [
                //     "Обрати майстра",
                //     "Обрати дату"                    
                // ]
            );
            const keyboard = Keyboard.reply(["Назад"]);
        
            await ctx.reply('Simple inline keyboard', keyboardInline);
            await ctx.reply('Simple inline keyboard', keyboard);
            // await ctx.telegram.sendMessage(
            //     ctx.message.chat.id, 
            //     `The new keyboard with questions and options answer`
            // );
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
