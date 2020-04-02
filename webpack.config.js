const path=require('path');
const vueLoaderPlugin=require('vue-loader/lib/plugin');
module.exports={
    entry:path.join(__dirname,'./main.js'),//入口，表示要使用webpack打包哪个文件
    output:{
        path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录
        filename:'bundle.js'//指定输出文件的名称
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},  
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },      
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    plugins:[new vueLoaderPlugin()]
}
