const { Telegraf } = require('telegraf');
const { start } = require('./controlers/start');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => start(ctx));

bot.launch();
