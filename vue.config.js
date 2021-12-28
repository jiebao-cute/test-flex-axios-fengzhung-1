
module.export ={
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    outputDir:'dist',
    assetsDir:'assets',//放置静态文件夹目录
    proxyTable: {//跨域
        '/api': {
            changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            target: 'http://localhost:3000',// 接口的域名
            pathRewrite: {
                '^/api': ''//后面可以使重写的新路径，一般不做更改
            }
        }
    },
}