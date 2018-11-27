<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="greet">greet</button>
    <a href="http://route1.test.com:8080/">route1</a>
  </div>  
</template>

<script>
import * as Cookies from "js-cookie";
import psl  from 'psl';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
   methods: {
    greet() {
      var strdomain;
      if('127.0.0.1' == window.location.hostname || 'localhost' == window.location.hostname ) {
        strdomain = window.location.hostname
      }
      else {
        var psl = require('psl')
        console.log(window.location.hostname)
        console.log('psl begin' + psl)
        console.log(psl)
        console.log('psl end' + psl)

        var parsedomain =psl.parse( window.location.hostname)
        console.log(parsedomain)
        console.log(psl.get( window.location.hostname))
        console.log(psl.isValid( window.location.hostname))

        strdomain = parsedomain.domain
      }      

      var cookievalue = Cookies.get('damoToken',  { domain: strdomain })      
      Cookies.set('damoToken', cookievalue + '1', { domain: strdomain })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
