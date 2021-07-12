For Development:
step 1: install `live-server`
step 2: go to folder `cd native-js` and start the app with `live-server`

pure js implemented:

1. multiple env
2. local open index.html file and nginx proxy for dev/prod
3. layout
4. with flex css
5. fetch to communicate with server side
6. router
7. toggle left navigation
8. menus on the left navigation, the arrow up/down function not work well!!
9. etc


Notes:
- short cut of generating html code: ! + Enter
- use `live-server` for live reload
- embed svg to html, then the `xmlns="http://www.w3.org/2000/svg" ` is not required, but if svg need to be parsed as `svg+xml`, then `xmlns="http://www.w3.org/2000/svg" ` is required, orelse the svg would not load correctly.
- css has no `&`, `&` is the used by Sass or Less
- 原生css是可以使用变量的，也可以使用`@import`引入外部css文件
  ```
  // 根伪类里面的变量可以在全局都使用
  :root {
    --nav-bg: rgb(69, 72, 73);
  }
  ```
- add `type="module"` to the js script label, then we can use export/import
- element classs list methods: https://www.javascripttutorial.net/javascript-dom/javascript-classlist/
  ```
  let div = document.querySelector('#content');
  div.classList.toggle('visible');
  ```

Todos:
- favicon not show under `live server`

Materials:
- font awesome cdn link: https://www.codegrepper.com/code-examples/javascript/font+awesome+5+cdn

The issues venilla JS has:
- style can be written in JS, and they may have the same value, if any value changes, then the correlate style must be changed also
- I dont know how to split the multiple htlms...which means all the html codes would be wrapped in `index.html` file
- etc