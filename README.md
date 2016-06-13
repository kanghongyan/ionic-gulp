# ionic quickstarter with gulp

## 运行
  npm edit confit 添加registry=http://registry.cnpmjs.org/
  1.npm install -g ionic
  2.npm install
  3.bower install
  4.ionic serve

## Table of Contents

  1. [Directory Structure Introduction](#directory-structure-introduction)
  1. [Installation and usage](#Installation-and-usage)
  1. [Switch development, staging and production mode](#Switch-development-staging-andproduction-mode)
  1. [Ionic with gulp build](#Ionic-with-gulp-build)
  1. [How to build an iOS ipa with Xcode](#How-to-build-an-iOS-ipa-with-Xcode)
  1. [Factories](#factories)


## Directory Structure Introduction

To support bigger apps, the starter app is structured differently than the basic `tabs starter app`.

The `tabs starter app` lumps all the `route` definitions and `controllers` in one Javascript file, and puts the html `templates` in a separate directory.

Instead, we've chosen to organize the files on a Module basis: each Module is in its own directory containing the Javascript (controllers etc) and the HTML (templates) for that Module. This makes it easier to keep a large app organized and maintainable.

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
|    |    |    |- home.directive.js
|    |    |    |- ($feature.$type.js)
|    |    |    |- home.html
|    |    |    |- home.scss
|    |    |
|    |    |- config/
|    |    |    |- config.default.json
|    |    |    |- config.development.json
|    |    |    |- config.production.json
|    |    |    |- config.js
|    |    |
|    |    |- app.js
|    |    |- app.routes.js
|    |    |- app.services.js
|    |    |- app.templates.js
|    |    |
|    |- css/
|    |    |- scss/
|    |    |    |- ionic.app.scss (index file)
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
   * `www` : compile the source code for the production environment


#### Separate "src" and "www" directories

The app's sources (JavaScript, HTML, CSS) sit under `src` instead of under the default location `www`.

During a production build (`gulp build --env production`), the sources (under `src`) are minified and concatenated and so on and the products (build artifacts, the minified/concatenated files) are then placed in the `www` directory, where Cordova (through the `gulp build --env production` or `ionic run --emulator -l` process) will pick them up.


#### Modules

General principle: ONE DIRECTORY == ONE MODULE (and one subdirectory == 1 sub module).

So you can remove a module by removing that directory (but then you still need to remove the module reference from `app.js` - the script include in `index.html` will be removed automatically by the build process).

Example: in the structure shown above you can see two Modules: `app.home`.

---

##  Installation and usage

#### Install Node
You’d better use [nvm](https://github.com/creationix/nvm) to manage your node.js versions:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.0/install.sh | bash
    source ~/.nvm/nvm.sh
    nvm install 0.12.7
    nvm use 0.12.7
    nvm alias default stable    # set 0.12.7 as default node version, not necessary

**PS:** There are two options of node version in ionic. Typically, choose the older version(0.12.7) of node will make everything works fine. But if you want to use the newer version(such as 4.1.5 or 4.2), you have to change some setting in package.json:

    -    "gulp-sass": "^1.3.3",
    +    "gulp-sass": "^2.0.4",

If you haven't change this, you may get some error when you `npm install`. When you run your app with `ionic serve` or `ionic emulate ios`, you found that scss compile failed and throw an error with `Error: The libsass binding was not found`.

#### Install Ionic & Cordova

    npm install -g cordova ionic
    npm install -g ios-deploy   # for ios deploy
    npm install -g ios-sim      # for ios simulator

#### Clone Repo

    git clone git@github.com:chenbin92/ionic-quickstarter-with-gulp.git
    cd ionic-quickstarter-with-gulp


#### Install Dependencies

  We have two kinds of dependencies in this project: `npm` and `bower`

    npm install
    bower install

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

#### Build IOS project and run on emulate
    $ ionic platform add ios
    $ ionic build ios
    $ gulp build
    $ ionic emulate ios  # run your ios app in emulator

#### Run the Application on browser
    $ gulp build   # equals `gulp build --env development`
    $ ionic serve  # run this in another terminal window

---

## Switch development, staging and production mode

If you do an ionic upload, then by default it will take your app from the `www` folder, not from `src`. This is because ionic upload takes the setting from the `ionic.project` file.


```
# switch to development mode
$ gulp build # same as running `gulp build --env development`
```

```
# switch to staging mode
$ gulp build --env staging
```

```
// switch to production mode
$ gulp build --env production
```

then run project in borwser, emulator or device

```
# run in borwser
$ ionic serve

# prepare the source for xcode
$ ionic build ios

# run on emulator
$ ionic emulate ios -l

# or run on device
$ npm install -g ios-deploy
$ ionic run ios --device -l -c
```


### notes for multi enviorment

 set up the gulp file and the starter app in such a way that there are essentially 3 distinct 'modes':

   * `development` mode which is what you use when running `ionic serve` and `gup build`  (running in the browser)
   * `staging` mode which is what you use `gulp build --env staging` and `ionic run ios --device -l` (running on a device)
   * `production` mode which is what you use with `gulp build` and `ionic run ios --device -l` (running on a device)

#### Development mode

In development mode, the gulp build process is simple: no minification, concatenation etc.

By default, in development mode, the various services (login etc) use a "mock" implementation with fake data (but you can easily override this through configuration parameters).

To define configuration parameters for development mode, add them to `src/js/config/config-development.json`. The `gulp build` process will write these values to `src/js/config/config.js`.

CLI:
  ionic serve

#### Staging mode

In staging mode (used on a real device), the `gulp build --env staging` process does a complete build including minification, concatenation etc, and the app runs with 'real' services.

To define configuration parameters for development mode, add them to `src/js/config/config-staging.json`. The gulp build process will write these values to `src/js/config/config.js`.

CLI:
  gulp build --env staging
  ionic serve --nogulp

#### Production mode

In production mode (used on a real device), the `gulp build --env production` process similar to the staging, In addition to setting the API path.

(e.g. the Parse service for login, but you can replace this with an implementation of your own)

To define configuration parameters for development mode, add them to `src/js/config/config-production.json`. The gulp build process will write these values to `src/js/config/config.js`.

CLI:
  gulp build --env production
  ionic serve --nogulp

### Ionic with gulp build

##### gulp build process

![gulp build process](http://7xr387.com1.z0.glb.clouddn.com/ionic-with-gulp-build-process.png.png)

##### gulp build task
![gulp build task](http://7xr387.com1.z0.glb.clouddn.com/Ionic-with-gulp-build2.png)

##### Using gulp switch different environments  
[ GIF demo](http://7xr387.com1.z0.glb.clouddn.com/ionic-with-gulp-build-process.gif)

---

## How to build an iOS ipa with Xcode

1. `$ gulp build --env production`
2. `$ ionic build ios`
3. open platforms/ios/ProkectName.xcodeproj
4. choose `Generic iOS Device` for `Set the active scheme`
5. click `Product > Archive`
6. Upload to App Store or Export(Save for Enterprise Deployment)

## Refs

1. [angular styleguide](https://github.com/johnpapa/angular-styleguide/tree/master/a1)
2. [ionic quickstarter](https://github.com/leob/ionic-quickstarter)

note:
index.html说明 <head>里面不可删除任何东西,包括注释
1.必须 引入ionic.app.css 
  当在src/app/下新建任何.scss文件,ionic.app.css里面就会更新,不需要手动引入
2.可选 引入第三方库
  (TODO:需要手动在gulpfile.js里修改路径,后续优化)
3.不需要手动添加js,会自动跟新js引入
4.app.template.js 最后上线打包时会用到,所有的template都会缓存