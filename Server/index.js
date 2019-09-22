const express = require('express');
const app = express();

app.use(express.json());
app.use(require('cors')());
app.use('/uploads', express.static(__dirname + '/uploads'));  //静态文件托管

require('./routes/admin.js')(app);
require('./plugins/db.js')(app);
require('./routes/web.js')(app);

app.listen('3000', () => {
  console.log('http://localhost:3000');
})