<template>
  <div id="app">
    <!-- <login></login> -->
    <!-- <json-style></json-style> -->
    <!-- <mycv> </mycv> -->
    <bookmark></bookmark>
  </div>
</template>

<script>
// import login from './components/login/login'
// import jsonStyle from './components/blog-list/json-style'
// import mycv from './components/remuse/myCV'
import bookmark from './components/blog/card/bookmark'

export default {
  name: 'app',
  components: {
    // login,
    // jsonStyle
    // mycv
    bookmark
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
html {
  font-size: 100px;
  background: #fbfbfb;
}

body,div,dl,dt,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td {
  padding: 0;
  margin: 0;
  font-size: 0.16rem;
}
fieldset,img {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ol,ul {
  list-style: none;
}
address,caption,cite,code,dfn,em,strong,th,var {
  font-weight: normal;
  font-style: normal;
}
caption,th {
  text-align: left;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: normal;
  font-size: 100%;
}
q:before,q:after {
  content: '';
}
abbr,acronym {
  border: 0;
}
</style>
