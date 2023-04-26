const { Keyboard } = require('telegram-keyboard');

module.exports = {
    start: async (ctx) => {
        const keyboard = Keyboard.make([
            [
                "Записатись",
                "Скасувати запис"
            ], 
            ["Наші майстри"], 
            ["Зв'язатись з нами"]
        ]);
    
        await ctx.reply(
            'Hi, I`m a chatbot at the barbershop "TestbarBershopBot". I will help you an appointment with a hairdresser or cancel your appointment with a hairdresser. I can tell you about hairdressers and help you get in touch with the manager', 
            keyboard.reply()
        );
        // await ctx.reply('Simple inline keyboard', keyboard.inline());

    }
};
