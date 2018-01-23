var expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it ('should generate correct message object', () => {
        var from = 'SPnL';
        var text = 'Testing Purpose';
        var Message = generateMessage(from, text);

        expect(Message.createdAt).toBeA('number');
        expect(Message).toInclude({ from, text });
    });
});