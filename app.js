const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const { start } = require('./controlers/start');
require('dotenv').config();
const { messageRoute } = require('./routes/message.route');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => start(ctx));

// bot.on("callback_query", async (ctx) => {
//     // Explicit usage
//     await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

//     await ctx.telegram.sendMessage(ctx.callbackQuery.from.id, `${ctx.callbackQuery.id}`);
// });

bot.on(message("text"), (ctx) => messageRoute(ctx));

bot.launch();
