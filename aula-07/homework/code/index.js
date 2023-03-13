const url = require('url');

const address = 'http://localhost:3000/default.html?year=2017&month=february&day=22';
const data = url.parse(address, true);

console.log(data.host);
console.log(data.pathname);
console.log(data.search);

const queryData = data.query;

console.log(queryData.year);
console.log(queryData.month);
console.log(queryData.day);