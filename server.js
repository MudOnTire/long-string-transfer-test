const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const qs = require('qs');

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.post('/local', (req, res) => {
  req.on('data', (data) => {
    // 获取并解析post提交过来的数据
    let formData = decodeURIComponent(data)   // 转码
    let param = qs.parse(formData)
    console.log(param.shelf)
    res.send(param);
  });
});

app.use(express.static('./public'));

app.listen(3000, () => {
  console.log('server listening 3000');
});