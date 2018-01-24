var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'SPnL';
        var text = 'Testing Purpose';
        var Message = generateMessage(from, text);

        expect(Message.createdAt).toBeA('number');
        expect(Message).toInclude({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = "Admin";
        var latitude = 15;
        var longitude = 19;
        var url = 'https://google.com/maps?q=15,19';
        var Message = generateLocationMessage(from, latitude, longitude);
        expect(Message.createdAt).toBeA('number');
        expect(Message).toInclude({ from, url });
    });
});