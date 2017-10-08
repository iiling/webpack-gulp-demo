# webpack-multipage-demo
利用webpack 构建多页面应用

    前端自动化构建过程中需要用到两大工具以及基于该工具的插件 本demo所用到的工具以gulp+webpack。

### 自动构建中使用到了哪些功能
* webpack打包 hash文件名
* 压缩css js
* 自动刷新页面
* babel
* eslint


### 关于webpack配置过程中使用插件遇到的问题以及工具版本问题
* webpack 1，2，3有三大版本，遇到配置上的问题，以自己所用的版本的官方文档
进行配置，其它网友的配置可能会有版本的差别导致自身配置的错误。
* 插件配置，比如babel，eslint 去webpack插件主页寻求配置方法。一般
来说webpack上的文档还是很全的。


### gulp和webpack各司其职
* gulp负责前端工作流，管道流作业方式，执行压缩文件，文件修改监听，以及
实时页面刷新。
* webpack负责模块化打包，对html模板插入css，js模块。

### 为什么babel放在webpack配置文件中，而不是在gulp中配置使用？
* babel如果在gulp中使用，那转换代码之后的输出路径还是源文件所在地址,而不是dest？？？这样好吗？

### eslint怎么用
* eslint是放在gulp中还是放在webpack中呢？
* 如果放在gulp中，在管道流作业中，gulp.dest()路径填写什么  还是src吗?
* 为了不纠结这个，我选择在webpack中集成eslint，启动命令在package.json中，可以在运行gulp之前，先npm run lint 来检查一下代码。
