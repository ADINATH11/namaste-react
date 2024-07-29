# Namaste React 

Episode 1:Inception
-React(object) => Browser(HTML)
-arguments of the ReactCreateElement are tag, props(attributes), children
-elements are nothing but the objects.
-order of the script files matter.
-nesting of sibling elements done with the help of the array.
-if there is any thing present in the root div of the html. 
 it will get replaced with the elements called from the render method.

Episode 2: Igniting the app
-npm - tool which is used for managing the node packaging and it does not stand for the node package manager
    -when you do npm init on the project which you are building you will be asked some configuration setting for the npm 
    -all the configuration setting are then reflected into the package.json file which is treated as a configuration file for your project
-bundler- tool which is used to bundle all the project code and make it ready for the hosting (on any any environment).
    -there are different types of bundlers present such as web-packer, parcel, viet. For our project we are using the parcel bundler.
-parcel- To install the parcel we need to install it with the command "npm install -D parcel".
    -The flag used here "-D" is to show that dependency used is a developer dependency which on installed gets reflected inside the dev-dependency in the package.json 
-package.json- Once you dob "npm init" a package.json file is created with all the configuration. 
    -It also stores the versions of the packages(dependencies) installed in your project. 
    -The version if has starting with the "^" it denotes that the minor upgrades if present can be replaced with the present version of the dependency and "~" is present then any update of the dependency with the nmajor upgrade can replace the present version.
    -There two types of dependencies i.e normal dependencies and dev dependencies. normal are for the production and dev are for the devlopment.
    -devDependencies are tools and utilities that aid in the development process but are not needed in production. 
-package-lock.json-it holds the similar configuration as the package.json but in more absolute way.
    -It contains all the version information about tha all dependencies including the transitive dependencies
-node-modules- node modules is the place where the all the code for the dependencies is present.
    -whenever we required a module we import it from there. 
    -It also stores the transitive libraries so it is large in size.
    -If you have package.json and package-lock.json we can generate the node modules using the "npm install".
-features of the parcel tool-
    -Dev Build can host project on the local server
    -HMR(Hot Module Replacement) real time changes can be seen local after making code changes.
    -this is done with the file watching algorithm in it coded in c++
    -caching 
        -faster builds as the most of the changes are cached.
        -Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran.
    -image optimization
    -Minification-
    -Bundling
        -When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. 
        -This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser.
    -Compress-
    -consistent hashing
    -code splitting
    -Differential Bundling - support older browsers
    -Diagnostics -shows the realtime errors and where they are caused
    -HTTPs using the "npx package index.html"
    -tree shaking -remove the unused code

