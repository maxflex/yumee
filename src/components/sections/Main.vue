<template>
  <div class="section" id="section0">
      <div class="section0 hidden">
          <div class="logo">
            <img src="/static/svg/logo.svg">
          </div>
          <h2>Доставка правильного питания с подпиской через мобильное приложение</h2>
          <div class="scroll-down"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
/* Section 0
* --------------------------------------- */
#section0 {
	background: #ffffff;
}

.section0 {
  & .logo {
    text-align: center;
    top: -2em;
    position: relative;
    & img {
      width: 100%;
      max-width: 500px;
    }
  }
  & h1 {
  	text-align: center;
  	padding: 0;
  	margin-bottom: 40px;
  	margin-top: 30px;
  	font-size: 44px;
  	color: #343434;
  	font-weight: 600;
  	text-transform: uppercase;
  	letter-spacing: 1.2px;
  }

  & h2 {
  	text-align: center;
  	padding: 0;
  	font-size: 20px;
  	line-height: 28px;
  	color: #888888;
  	font-weight: 300;
  	letter-spacing: 0.2px;
  	width:100%;
  	max-width: 400px;
  	margin: 0px auto;
  }
  & .scroll-down {
  	background: url(/static/img/mouse.gif) no-repeat center center;
  	width:100%;
  	height:100px;
  	position:absolute;
  	bottom:0;
  	left:0;
  	background-size: 45px 45px;
  }
}


@media only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-device-pixel-ratio: 2) {
	.section0 .scroll-down {
		background: url(/static/img/mouse.gif) no-repeat center center;
		background-size: 45px 45px;
	}
}



/* MOBILE PHONE */
@media screen and (max-width: 760px) {
	.section0 {
		padding: 20px;
  	& h1 {
  		font-size: 32px;
  	}
  	& h2 {
  		margin-top: 30px;
  		font-size: 16px;
  		line-height: 24px;
  		width:100%;
  	}
  	& .scroll-down {
  		background-size: 34px 34px;
  	}
	}
}



@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
	.section0 {
		padding: 20px;
	}
}


@media only screen and (min-width : 1824px) {
  .section0 {
  	& h1 {
  		margin-bottom: 60px;
  		margin-top: 40px;
  		font-size: 72px;
  	}
  	& h2 {
  		font-size: 30px;
  		line-height: 42px;
  		max-width: 550px;
  		font-weight: 300;
  	}
  	& .scroll-down {
  		background-size: 68px 68px;
  		height:140px;
  	}
  }
}
</style>
