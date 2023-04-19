const { Keyboard } = require('telegram-keyboard');

module.exports = {
    start: async (ctx) => {
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
    
    }
};
