<template>
  <div class="section" id="section4">
      <div class="section4">
          <div class="app-icon"></div>
          <h3>The Days you will remember.</h3>
          <p>Available for iPhone.</p>
          <div class="app-store-btn">
              <a id="app-store-link" href="https://itunes.apple.com/app/apple-store/id939368917?pt=288111&ct=Days%20Website&mt=8" target="_blank"></a>
          </div>
          <div class="social">
              <div class="facebook">
                  <a id="facebook-link" href="https://www.facebook.com/dayscountdown" target="_blank">Facebook</a>
              </div>
              <div class="twitter">
                  <a id="twitter-link" href="https://twitter.com/treeba" target="_blank">Twitter</a>
              </div>
          </div>
          <div class="copyrigth">Made with love in the UK. Download the
              <a href="http://daysapp.co/presskit/Days_Press_Kit.zip">Press Kit</a>.
          </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='scss'>
.section4 {
	width:100%;
	max-width: 760px;
	margin: 0px auto;
	height: 50%;
}

.section4 .app-icon {
	background: url(/static/img/app-icon.png) no-repeat;
	background-size: 100% 100%;
	width: 126px;
	height: 126px;
	margin: 0 auto;
	margin-bottom: 20px;
}


.section4 h3 {
	font-size: 40px;
	line-height: 52px;
	color: #343434;
	font-weight: 300;
	letter-spacing: 0.2px;
	text-align: center;
	margin: 0;
}


.section4 p {
	font-size: 20px;
	line-height: 28px;
	color: #888888;
	font-weight: 300;
	letter-spacing: 0.2px;
	text-align: center;
	margin-top: 10px;
}


.section4 .app-store-btn {
	background: url(/static/img/app-store.png) no-repeat;
	background-size: 100% 100%;
	width: 177px;
	height: 62px;
	margin: 0 auto;
	margin-top: 70px;
}

.section4 .app-store-btn:hover {
	background: url(/static/img/app-store-hover.png) no-repeat;
	background-size: 100% 100%;
}


.section4 #app-store-link {
	width: 177px;
	height: 62px;
	display: block;
	cursor: pointer;
}

 .section4 .social {
 	max-width: 124px;
 	margin: 0 auto;
 	height:80px;
 	position:absolute;
 	bottom:0;
 	left:0;
 	right: 0;
 }


 .section4 .facebook a{
 	font-size: 14px;
 	color: #20c36b;
 	text-decoration: none;
	float: left;
  }

.section4 .twitter a{
	font-size: 14px;
	color: #20c36b;
	text-decoration: none;
	float: left;
	padding-left: 20px;
 }
/*
 .section4 .social #twitter-link, #facebook-link {
	 width: 50px;
	 height: 50px;
	 display: block;
 }
*/
.copyrigth {
	font-size: 12px;
	color: #888888;
	letter-spacing: 0.2px;
	text-align: center;
	width:100%;
	height:40px;
	position: absolute;
	bottom:0;
	left:0;
}

.copyrigth a {
	color: #20c36b;
	text-decoration: none;
}

.copyright a:hover {
	color: #20c36b;
	text-decoration: none;
}

.copyrigth a:visited {
	color: #20c36b;
	text-decoration: none;
}


 @media screen and (max-width: 760px) {
	 .section4 {
	 	height: 80%;
	 }
 	#section4 {
 		padding: 20px;
 	}
 	.section4 h3 {
 		font-size: 30px;
 		line-height: 40px;
 	}
 	.section4 p {
 		font-size: 16px;
 		line-height: 24px;
 	}
 	.section4 .app-icon {
 		background: url(/static/img/app-icon.png) no-repeat;
 		background-size: cover;
 		width: 100px;
 		height: 100px;
 	}
 }


@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
 	 .section4 {
 	 	height: 80%;
 	 }
 	#section4 {
 		padding: 20px;
 	}
 	.section4 h3 {
 		font-size: 30px;
 		line-height: 40px;
 	}
 	.section4 p {
 		font-size: 16px;
 		line-height: 24px;
 	}
 	.section4 .app-icon {
 		background: url(/static/img/app-icon.png) no-repeat;
 		background-size: cover;
 		width: 120px;
 		height: 120px;
 	}
 }



/* for high resolution display */

@media only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-device-pixel-ratio: 2) {
	.section4 .app-icon {
		background: url(/static/img/app-icon@2x.png) no-repeat;
		background-size: 100% 100%;
	}
	.section4 .app-store-btn {
		background: url(/static/img/app-store@2x.png) no-repeat;
		background-size: 100% 100%;
	}
	.section4 .app-store-btn {
		margin-top: 50px;
	}
	 .section4 .facebook{
		 background: url(/static/img/facebook@2x.png) no-repeat;
		 background-size: 100% 100%;
	}
	.section4 .twitter {
		background: url(/static/img/twitter@2x.png) no-repeat;
		background-size: 100% 100%;
	}
 }




@media only screen and (min-width : 1824px) {
	.section4 {
		width:100%;
		max-width: 960px;
		height: 50%;
	}
	.section4 h3 {
		font-size: 50px;
		line-height: 62px;
	}
	.section4 p {
		font-size: 28px;
		line-height: 40px;
		font-weight: 300;
	}
	.section4 .app-icon {
		width: 180px;
		height: 180px;
		margin-bottom: 50px;
	}
	.section4 .app-store-btn {
		width: 240px;
		height: 84px;
		margin-top: 100px;
	}
}
</style>
