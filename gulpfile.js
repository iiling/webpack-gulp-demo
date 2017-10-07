var gulp=require("gulp");
var clean = require("gulp-clean");
var webpack = require('webpack');
var webpackConfig =require("./webpack.config.js");
var connect = require('gulp-connect');
// var babel=require('gulp-babel');

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

gulp.task("watch",function(){
	gulp.watch("src/html/*.html",["reload"]);
	gulp.watch("src/css/*.css",["reload"])
})

gulp.task("connect",function(){
	connect.server({
		root:'src',
		livereload:true
	})
})

gulp.task("reload",function(){
	gulp.src("dest/html/a.html")
	.pipe(connect.reload())
	
})

gulp.task("default",["clean","copyimg","runwebpack","connect","watch"]);