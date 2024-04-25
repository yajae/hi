// 引入 Express 框架
const express = require('express');

// 創建 Express 應用
const app = express();

// 設置應用的路由
app.get('/', (req, res) => {
  res.send('歡迎來到我的網站！');
});


// 監聽指定的端口，啟動服務器
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`服務器運行在端口 ${PORT}`);
});