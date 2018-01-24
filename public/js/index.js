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
    var formattedTime = moment(message.createdAt).format('hh:mm a');
    var template = $("#message-template").html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });
    $('#messages').append(html);
});

socket.on('newLocationMessage', function (message) {
    var formattedTime = moment(message.createdAt).format('hh:mm a');
    var locationTemplate = $("#location-message-template").html();
    var html = Mustache.render(locationTemplate, {
        from: message.from,
        url: message.url,
        createdAt: formattedTime
    });
    $('#messages').append(html);
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();
    var messageTextbox = $('[name=message]');
    socket.emit('createMessage', {
        from: 'Swapnil',
        text: messageTextbox.val()
    }, function () {
        messageTextbox.val('');
    });
});

var locationButton = $("#send-location");
locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser.');
    }
    locationButton.prop('disabled', true).text('Seding location...');
    navigator.geolocation.getCurrentPosition(function (position) {
        locationButton.prop('disabled', false).text('Send location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        locationButton.prop('disabled', false);
        alert('Unable to fetch location');
    });
});