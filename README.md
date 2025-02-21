# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//------------------------my notes--------------------------

Web pack : 
 
 it takes all code of latest code and convert to well ordered file structure and make it compactable for any browser. with the help of tool 'Babel'

 Webpack Dev Server:

 it gives a local server to run our project..it transpile by the webpack.

 //------------------------------------

 main.jsx ->

 REact.Dom.REnder()   -> functional package that help to inject the elements to DOM of webpage;
 by using 'render' of package. (matte index.html ulla 'id=root' lekki);

 converting is like this ...

React.createElement ()  enn aoru function vilikkyum. 

ex: React.createElement('div' , {id: 'my-hello'} , 'hi aswin')

    simillar to => const a = <div id='my hello> hi aswin </div>

so.. now we are writeing inthe style of tags.. to avoid complex nesting of 

React.createElement({.... react.crea()..})

working of Bable :

<div> hello</div> -->  React.createElement() --> document.createElement();

//----------------------------------------------------

 JSX features :  

(1)

 class ---> className
 for ----> htmlFor       : bable convert cheyumbo cheriya problem ind, key words aan ithokke;

(2)

components: <Label/> 

react components give 2 main features. -> state & lifecycle Management

ee rand features aadhyam class componenets aayirrnu support cheyidhadh. pinneed Hooks vannu.. ippo decript aayi Class components



