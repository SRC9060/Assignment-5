const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.escuelajs.co/api/v1/products',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    })
  );
};
