const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static('public')); // 用于提供静态文件，如 HTML, CSS, JS

app.use('/api', createProxyMiddleware({ 
    target: 'https://whois.freeaiapi.xyz', // 目标 API
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // 重写路径
    },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
