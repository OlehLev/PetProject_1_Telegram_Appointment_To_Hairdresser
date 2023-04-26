const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const { start } = require('./controlers/start');
require('dotenv').config();
const { messageRoute } = require('./routes/message.route');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx, next) => start(ctx, next));

bot.on("callback_query", async (ctx) => {
    // Explicit usage
    // console.log(ctx.update.callback_query);
    await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

    await ctx.telegram.sendMessage(ctx.callbackQuery.from.id, `${ctx.callbackQuery.id}`);
});

bot.on(message("text"), (ctx, next) => messageRoute(ctx, next));

// bot.use(messageRoute);

bot.launch();

// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
