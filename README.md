# ionic project

## 约定：

```

1. 统一格式: 约定缩进2格，保持风格一致

2. 样式文件: 

    每个模块的scss都需要有一个唯一的class，即最外层的样式，约定为.page-xxx
    公共样式约定为.g-xxx，在/src/css/scss/global.scss中
    class命名风格：小写，单词之间统一用横线连接。例如：btn-primary 不推荐：btnPrimary

3. 字体文件：

    项目中已有自定义的iconfont，使用时可以参考/src/font/demo.html，找到相关图标的class

```

## 目录结构

```
/
|
|- src/
|
|    |
|    |- app/
|    |    |- home/
|    |    |    |
|    |    |    |- home.module.js
|    |    |    |- home.controller.js
|    |    |    |- home.service.js
|    |    |    |- home.html
|    |    |    |- home.scss
|    |    |
|    |    |- config/
|    |    |    |- config.default.json
|    |    |    |- config.development.json
|    |    |    |- config.production.json
|    |    |    |- config.js
|    |    |
|    |    |- directive/
|    |    |    |- g-directive.js
|    |    |
|    |    |- app.js
|    |    |- app.routes.js
|    |    |- app.filters.js
|    |    |- app.templates.js
|    |    |
|    |- css/
|    |    |- scss/
|    |    |    |- ionic.app.scss (index file)
|    |    |    |- custom-style.scss (all scss will be concat into this file)
|    |    |    |- global.scss (global style)
|    |    |    |- font.scss (custom font style)
|    |    |- ionic.app.css (all css will be compiled into this file)
|    |    |
|    |- img/
|    |    |
|    |- lib/
|    |    |- angular/
|    |    |- angular-resource
|    |    |- ionic
|    |- shared/ (common components cross projects)
|    |    |- canvasClock/
|    |    |- calendar/
|    |    |- constants/
|    |- index.html
|
|- www
```

   * `app` : components using for the app
   * `css` : common stylesheets, using `scss`
   * `img` : common images
   * `lib` : thrid-party libraries managed by `bower`
   * `shared` : common components cross projects
   * `www` : compile the source code for the staging/production environment
## NOTE

index.html说明 <head>里面不可删除任何东西,包括注释,gulp打包会用到
1. 必须 引入ionic.app.css
   当在src/app/下新建任何.scss文件,ionic.app.css里面就会更新,不需要手动引入
2. 可选 引入第三方库
3. 不需要手动添加js,gulp会自动更新js引入到index.html中
4. app.template.js 最后上线打包时会用到,所有的template都会缓存

## Switch development, staging and production mode

The app's sources (JavaScript, HTML, CSS) sit under `src` instead of under the default location `www`.

During a production build (`gulp build --env production`), the sources (under `src`) are minified and concatenated and so on and the products (build artifacts, the minified/concatenated files) are then placed in the `www` directory

1. `ionic serve` (默认开发环境 `gulp build --env development`)
    
    开发环境下，源文件在src/
    
2. `gulp build --env staging`
    
    `ionic serve --nogulp` (ionic.project需采用ionic.staging.project里的配置)
    
    test环境下，src中文件会打包到www/下，包括js文件，css文件的合并 （不压缩）

3.  `gulp build --env production`
        
    `ionic serve --nogulp` (ionic.project需采用ionic.production.project里的配置)

     production环境，src中文件会打包到www/下，包括js文件，css文件的合并 （压缩）
     

##  Installation and usage

#### Install Node

#### Install npm

     npm install bower -g
     npm install gulp -g
     npm install ionic -g

#### Install Dependencies

  We have two kinds of dependencies in this project: `npm` and `bower`

    npm install 
    bower install (用git bash 来执行这个命令，CMD下可能有错，无法安装lib)

  Run the installed，you should find that you have two new folders in your project

  * `node_modules` - contains the npm packages for the tools we need

  * `app/lib` - contains the angular framework files and thrid-party libraries

Notes: 

1. We use `npm` managing Node.js modules(node_modules), use `bower` installing third-party scripts(lib); The biggest difference is that npm does nested dependency tree (size heavy) while Bower requires a flat dependency tree (puts the burden of dependency resolution on the user).

2. demo for adding the plugin "ion-image-lazy-load"

  1. `bower install ion-image-lazy-load --save` # this will update `bower.json` and create file in `src/lib/ion-image-lazy-load`
  2. rerquire "ion-image-lazy-load --save" in glupfile.js

  ```
  var paths = {

    lib: [
      './src/lib/ion-image-lazy-load/ionic-image-lazy-load.js'
    ]
  ```

#### Run the Application on browser
    $ gulp build   # equals `gulp build --env development`
    $ ionic serve  # run this in another terminal window



### Ionic with gulp build

   gulp buid task





