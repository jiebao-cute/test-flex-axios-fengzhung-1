
module.export ={
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    outputDir:process.env.outputDir
}