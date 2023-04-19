const { Telegraf } = require('telegraf');
const { Keyboard } = require('telegram-keyboard');
const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    const keyboard = Keyboard.make([
        [
            'Button 1',
            'Button 2'
        ], 
        ['Button 3'], 
        ['Button 4']
    ]);

    await ctx.reply('Simple built-in keyboard', keyboard.reply());
    // await ctx.reply('Simple inline keyboard', keyboard.inline());

});

// bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('text'), async (ctx) => {

    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.message.from.first_name}`);
});
// bot.hears('text', (ctx) => ctx.reply('Hey there'));


bot.launch();
