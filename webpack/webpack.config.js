/**
 * Created by Administrator on 2017/7/25 0025.
 */


module.exports={
    entry:'./src/dist/js/index.merger.js',
    output:{
        path:__dirname+'/src/dist/js',
        filename:'_index.merger.js'
        
    },
    resolve:{
        alias:{
            jquery:__dirname+'/src/js/lib/bower_components/jquery/jquery.js'
        }
    }
}