<template>
  <div class="mask">
    <div class="controller">
      <div class="objects">
        <!-- text area -->
        <div class="text-area rotate">
          <p class="error">Error 404</p>
          <p class="details">
            There was a problem
            <br />
            <br />这个页面出现了未知错误
          </p>
        </div>
        <div class="homepage rotate">
          <a href="#">回到主页</a>
        </div>
        <!-- home page -->
      </div>
      
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
	.mask{width:100%;height:100%;background:#000000 url(../../assets/img/404/bg.jpg) no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size: cover;color:#2f2f2f;font-weight:normal;font-style:normal;}
a:link,
a:hover,
a:visited {
  color: #2f2f2f;
  text-decoration: none;
}

.rotate {
  transform: rotate(-10deg);
}

.social {
  margin: 50px auto;
  width: 408px;
  padding-bottom: 50px;
}
.social-icons {
  display: block;
  height: 48px;
}
.social-icons li {
  display: inline-block;
  margin-left: 6px;
}

@media screen and (min-width: 802px) {
  /* 800+ resolution */

  .controller {
    width: 942px;
    margin: auto;
  }
  .objects {
    width: 100%;
    height: 673px;
    background: url(../../assets/img/404/objects.png) no-repeat center center;
  }
  .text-area {
    width: 300px;
    padding-top: 180px;
    margin-left: 40px;
    text-align: center;
  }
  .error {
    font:70px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .details,
  .homepage {
    font: 42px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .homepage {
    background: url(../../assets/img/404/home.png) no-repeat;
    padding-left: 50px;
    float: right;
    right: 70px;
    top: -100px;
    position: relative;
    text-align: center;
  }
}
.copyrights {
  text-indent: -9999px;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}
/*
	This is not legal version, preview only mode. If you're using this one, you're just fucking cheap. Seriously, It's about 5$, can't you afford it?
*/

@media screen and (min-width: 602px) and (max-width: 801px) {
  /* 800- resolution */

  .controller {
    width: 800px;
    margin: auto;
  }
  .objects {
    width: 100%;
    height: 673px;
    // background: url(../../assets/img/404/objects-800.png) no-repeat center center;
  }
  .text-area {
    width: 250px;
    padding-top: 190px;
    margin-left: 40px;
    text-align: center;
  }
  .error {
    font: 86px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .details,
  .homepage {
    font: 42px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .homepage {
    background: url(../../assets/img/404/home.png) no-repeat;
    padding-left: 50px;
    float: right;
    right: 25px;
    top: -50px;
    position: relative;
    text-align: center;
  }
}

@media screen and (min-width: 0px) and (max-width: 601px) {

  .controller {
    width: 600px;
    margin: auto;
  }
  .objects {
    width: 100%;
    height: 673px;
    // background: url(../../assets/img/404/objects-600.png) no-repeat center center;
  }
  .text-area {
    width: 200px;
    padding-top: 230px;
    margin-left: 20px;
    text-align: center;
  }
  .error {
    font: 56px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .details,
  .homepage {
    font: 32px Jenna Sue, Helvetica, Arial, sans-serif;
  }
  .homepage {
    // background: url(../../assets/img/404/home-600.png) no-repeat;
    padding-left: 35px;
    float: right;
    right: 20px;
    top: -50px;
    position: relative;
    text-align: center;
  }
}
</style>