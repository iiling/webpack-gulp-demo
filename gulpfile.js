var gulp=require("gulp");
var clean = require("gulp-clean");
var webpack = require('webpack');
var webpackConfig =require("./webpack.config.js");
 
gulp.task("copyimg",function(){
	gulp.src("./src/img/*.png")
	.pipe(gulp.dest("./dest/img/"))
})

gulp.task("clean",function(){
	gulp.src(['dest'])
	.pipe(clean())
})


gulp.task("runwebpack",function(callback){
	webpack(require('./webpack.config.js'), function(err, stats) {
        callback();
    });

})


gulp.task("default",["clean","copyimg","runwebpack"]);