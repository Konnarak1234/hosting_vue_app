## down below is the vue custom tags we usually need:
`<templet>, <slot>, <customize>, <router-link>, <router-view/>`

## <router-link> tag:
`<router-link> is the tag that work similar to <a> in html but different in direction of routing`
`key-different: <router-link> send request to the vue bundle, otherwise <a> send a request to the server throw the url`

## route parameter
`we do this in vue by using, /:parameter, and grap the parameter in the element using $route.params`
`=> it a route for the page, but it come up with the dynamic value inside the url, which we can grap those data and do something with the page`

## dynamic link
`=> to create an dynamic link in vue we use <router-link :to={ name: 'name', params: {id: job.id}}> element and data bind with this structure of input data`

## vue's object that we face:
`1. $emit object: use to customize event and send back data to parent element`
`2. $refs object: use to select the specific DOM`
`3. $route object: use to get all information about the url`
`4. $router object: when we want to navigate the user to somewhere, esp, $router.go() and $router.push()`
`5. $props object`
`6. $slots object`

## redirect url and 404 route 
`=> we redirect the url by using, redirect: /route`
`=> we create 404 route by using route parameter: /:catchAll(.*)`
`=> another way to redirect user to another url, we can use $router.push(url)`

## programmatic navigation
`we can program the Web History API by using $router object`

## Json server
`to install it we use: npm install json-server`
`=> to run it on our computer: npx json-server --watch data/db.json`

## fetching data in vue
`down below is the way to fetching the data: `

## the best time to execute the fetching data from database in vue lifecycle is after the element mounted,
`so we will use mounted(){ method };`

## down below is the js fetching api:
`  fetch('http://localhost:3000/jobs')`
`        .then(res => res.json())`
`        .then(data => this.jobs = data)` 
`        .catch(e => console.log(e.message));`

## array.map() in js
`=> array.map() in js is use to create a new array base on value that return by callback function and the array element that pass as an argument`

## vue composition api