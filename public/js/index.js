var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
});
// socket.emit('createMessage', {
//     from: 'Frank',
//     text: 'Hiie'
// }, function () {
//     console.log('Got it');
// }); 


socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
    var li = $("<li></li>");
    li.text(`${message.from} : ${message.text}`);
    $('#messages').append(li);
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();
    var text = $('[name=message]').val()
    socket.emit('createMessage', {
        from: 'Swapnil',
        text
    }, function () { });
});