<template>
  <div>
    <h1>Hello From Route1</h1>
    {{testmsg}}

    <a href="http://www.test.com:8080/">home</a>
  </div>
</template>

<script>
import * as Cookies from "js-cookie";
import psl  from 'psl';

export default {
    name: 'Route1',
    data() {
    return {
      testmsg: 'xxx',
    };
  },  
  mounted() {
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

    this.testmsg = Cookies.get('damoToken', { domain: strdomain });
  },
};
</script>

<style scoped>

</style>
