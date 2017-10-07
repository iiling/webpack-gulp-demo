# webpack-multipage-demo
利用webpack 构建多页面应用

    前端自动化构建过程中需要用到两大工具以及基于该工具的插件，本
demo所用到的工具以gulp+webpack。


#自动构建中使用到了哪些功能

1.webpack打包 hash文件名
2.压缩css js
3.自动刷新页面
4.babel
5.eslint


#关于webpack配置过程中使用插件遇到的问题以及工具版本问题

1.webpack 1，2，3有三大版本，遇到配置上的问题，以自己所用的版本的官方文档
进行配置，其它网友的配置可能会有版本的差别导致自身配置的错误。
2.插件配置，比如babel，eslint 去webpack插件主页寻求配置方法。一般
来说webpack上的文档还是很全的。


#gulp和webpack各司其职
1.gulp负责前端工作流，管道流作业方式，执行压缩文件，文件修改监听，以及
实时页面刷新。
2.webpack负责模块化打包，对html模板插入css，js模块。

为什么babel放在webpack配置文件中，而不是在gulp中配置使用？

1.babel如果在gulp中使用，那转换代码之后的输出路径还是源文件所在地址
而不是dest？？？这样好吗？

#eslint怎么用