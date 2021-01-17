#!/usr/bin/env node

var sron = require('./App');
(async () => {
var data = await sron
if(data) console.log('Yep')
else console.log('Nope')
})();
