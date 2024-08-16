# Namaste React 

Episode 1:Inception
-React(object) => Browser(HTML)
-arguments of the ReactCreateElement are tag, props(attributes), children
-React Element Example:React.createElement("h1", { key: "contact.id" }, "Hello World");
-React Component Example:  
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
-package.json- Once you do "npm init" a package.json file is created with all the configuration. 
    -It also stores the versions of the packages(dependencies) installed in your project. 
    -The version if has starting with the "^" it denotes that the minor upgrades if present can be replaced with the present version of the dependency and "~" is present then any update of the dependency with the nmajor upgrade can replace the present version.
    -There two types of dependencies i.e normal dependencies and dev dependencies. normal are for the production and dev are for the devlopment.
    -devDependencies are tools and utilities that aid in the development process but are not needed in production. 
-package-lock.json-it holds the similar configuration as the package.json but in more absolute way.
    -It contains all the version information about the all dependencies including the transitive dependencies
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
        -Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.
    -Bundling
        -When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. 
        -This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser.
    -Compress-
    -consistent hashing
    -code splitting
    -Differential Bundling - support older browsers
    -Diagnostics -shows the realtime errors and where they are caused
    -HTTPs using the "parcel src/index.html --https"
    -tree shaking -remove the unused code


Episode 3:Laying the Foundation

-scripts in package.json- here we can write the scripts such as "start":"parcel index.html" and can run the cmd "npm run start" or "npm start", which will 
     give the same result as the "npx parcel index.html". 
    -This is simple way where you can save yurself from writing the long cmds and write the scripts for the same.
-JSX(javascript syntax)- It is not a HTML but is a XML like syntax.
    -JSX is not a pure javascript , it is transpiled before it reaches the browser.It is done by parcel using the BABEL
    -In JSX, the camelcase is used for the attribute of the tags also the 'class' in HTML is equivalent to the 'className' in the JSX.
    -For multiple line code in the JSX you have encode it in the ().
-BABEL-Babel is  a JS compiler.
-In JS const fn = () =>true; is same as const fn2= () =>{ return true};
-React Component-
    -there two types of the react component i.e class based component and functional component.
    -The name of the functional component is always started with capital letter.
    -The render method calls the react functional component by "render(<ComponentName/>)" and the react element as "render(elementName)".
    -Component Composition is nothing but the component inside the component.
    -If you want to access the JS expression in the JSX of the component you can do it by writing it in the {}.
    -So if you want to add react element inside the {} in the JSX.
    -{FunctionName()},<FunctionName/>,<FuntionName></FunctionName> all can be used for the component composition.
    -Whenever the {} inside get executes in the JSX it sanitized first so any malicious JS code does not get execute here.
    -there can be the infinite loop situation whenever we call the another component inside the component, which has this component inside it.
    -We can try any composition like we can call elment in component vice versa or component in component or element in element.


Episode 4: Talk is cheap,show the code
-Whenever designing a web page make a plan before writing the code.
-while giving the css to the component in the JSX you need to pass the css in the js object to the attribute of the tag.
-But giving the css inline is not a preferred way. also the js object in the jsx is given inside the {}.
-Config driven UI-
    -controlling the UI using the data(Config)
-Whenever looping inside the JS always provide a key inside the object.
-we need to add the key to each element in the loop to identify each elment uniquely.
-this makes the react to identify each element uniquely and whenever there is change inside the result data it render all the elements but will render which are were not rendered earlier
-index as a key is a anti pattern.
-not using the keys (not acceptable)<<<<<< using index as a keys <<<<<< using the unique id as a keys(best practices).


Episode 5: Let's Hook up!
-The best practice - separate component with separate file.
-There are two type of export import in the JS
    -export default component
        -you can export only one component, but you can use both the exports in one file.
        -here the imports appear like import resLogo from "../utils/constants";
    -export named component
        -ypu can export as many as componets/constants in one file using this.
        -you just have to add the export in front of the component.
        -here the imports appear like import { appLogo } from "../utils/constants";
-React Hooks 
-there are many react hoooks but he most used are the following
    -useState()
    -is is simple to make any variable into a state variable with help of the useState()
    -It returns the destructured array, which consist of the variable and function starting with the set key (best practice not any compultion),and any default value you for the variable can be given inside the useState([{}]).
    -whenever you want to change the variable values and make changes on the page it can be done using the setvariable function by giving it the updated variable value inside it.
    -the updated value will be rerendered on the page,this done with the help of the reconcilation algorithm (React fiber) which essentially uses the difference algorithm which marks the difference between the previous DOM and the updated DOM(virtual DOM which contains the updated values of the state variable),and then the component which contains the change is rerendered.
    -This is one of the reason which makes the React fast and poweful because React does the efficient DOM manipulation compare to other libraries and frameworks. It keeps the data layer and page in sync.
    -useEffects()

Episode 6:Exploring the world
-two types of Architectures
    -Monolith
    -Microservices
        -single responsibility principle
        -different tech used for different projects 
        -mostly adopted
-Approaches for the API call in React
    -load -> api call -> render
    -load -> render -> api call -> render (mostly used and gives better UX)
-Use of UseEffects() hook
    -It takes two arguments one function and other array.
    -whenever we need to do something after the element is rendered it goes inside this hook function.
-fetch returns a promise.
-CORS policy(Cross Origin Resource Sharing)-It is a browser restriction for the cross origin calls.
-Shimmer component -
    -most of web pages use the shimmer for better UX as it loads a fake feed page while making a API call.
-Whenever the useState() used to update a variable it rerender the components fromwhere it is been called not the whole page reloaded.
-Also the useState() variable is declared as const it can be updated unlike the js. here whenever we render the component the value of the variable is changed while declaring so a new const varible with the updated value is created.
- Also the diff algorithm give the part of the code or div which is being changed and only that is rerendered in the react, that is why the react is fast while updating.
-Whenever the state variable update react triggers the reconcillaition cycle.

Episode 7:Finding the path
-More about the Hooks
    -UseState():
        - they should be declared at start of the component.
        -It is used for storing local state varibales.
        -Never use it in the conditional statements or loops.

    -UseEffect():
        -Ex. const [callbackFunction(),[dependencyArray]]
        -dependency array contains the state variable.
        -If we do not pass the dependecy array to the useEffect() => it gets executed whenever the component is rendered.
        -If we pass the empty dependecy array to the useEffect() => it gets executed only once, when the component is rendered for first time.
        -If we pass the dependecy array to the useEffect() => it gets executed whenever the dependency gets updated.
-React Router DOM
    -instaling command "npm i react-router-dom"
    -React router dom is the library used for the adding the routes in the react.
    -For providing the route, you need two components from the react router dom
        -createBrowserRouter
            -This is the recommended router for all React Router web projects.
            -It takes a array of objects containing the path, element, errorElement.
            -const router = createBrowserRouter([
                {   
                        path:"/",
                        element:<AppLayout/>,
                        errorElement:<Error/>
                    },
                    {   
                        path:"/about",
                        element:<About/>
                    },
                    {   
                        path:"/contact",
                        element:<Contact/>
                    },
                ])
        -RouterProvider
            -(<RouterProvider router={router}/>)
            -Router Provider is passed to the render method of the root.
            -it takes the router object as a argument created using the createBrowserRouter.
    -UseRouteError()
        -It is a react hook used for getting the info the error.
        -It can be used in the Error component for geting info about the error.
    -If you want to make the component replace another component in the react, it can be done with the help of the children components and outlet.
    -Simply you need to add the children component in the children elements of the createBrowserRouter() array. and add the oulet component in the place of the component which you want to replace.
    -this setup allows you to replace the components in the react project which give you feels like you have moved to different page but are on the same page just component is replaced with the another one. so the reloading of the other component does not happen and also the replacement takes place quicker and is really fast. It is also the reason why the react is fast. and is a single page application.
    -Linking of the pages to the elements in the react is done with link component provided react router dom. unlike the anchor tag.
    -anchor tag reloads the whole page unlike the Link it uses similar props like anchor as href, it uses to.
    -There are two types of routing the Web application.
     -Server Side Routing.(It is expensive as call to the server is made then it returns the html page and it gets rendered. was used earlier)
     -Client side Routing.(It is used in the React, as it uses the components routing). 

    
        
