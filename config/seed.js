require('dotenv').config();
require('./database');

const diary = require('../models/diary');


(async function() {
await diary.deleteMany({});
const diary = await diary.create ([
{date:'4/24/22',
title:'first entry',
diary:'this is seed data for my first diary entry'},
{date:'4/25/22',
title:'second entry',
diary: 'second entry to test project'}]);

console.log(diary)

process.exit();

})();

