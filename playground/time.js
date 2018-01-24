const moment = require('moment');

 var sometikestamp = moment().valueOf();
 console.log(sometikestamp);

var createdAt = 0;
var date = moment(createdAt);
console.log(date.format('hh:mm a'));
