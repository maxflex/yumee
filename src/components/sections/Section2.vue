<template>
  <div class="section" id="section2">
      <div class="section2">
          <div class="text2">
              <h3>Creating events was never easier</h3>
              <p>Easy, simple interface to create your events in just seconds.</p>
          </div>
          <video autoplay loop muted id="video" class="video">
              <source src="video/video2.mp4" type="video/mp4">
              <source src="http://daysapp.co/video/movie2.ogv" type="video/ogv">
              <source src="http://daysapp.co/video/movie2.webm" type="video/webm">
          </video>
          <div class="iphone2">
              <div class="iphone-photo2"></div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='scss'>
.section2 {
	width:100%;
	max-width: 760px;
	margin: 0px auto;
}

.text2 {
	max-width: 360px;
	float: left;
	margin-top: 240px;
}

.section2 .text2 h3 {
	font-size: 40px;
	line-height: 52px;
	color: #343434;
	font-weight: 300;
	letter-spacing: 0.2px;
	text-align: left;
}

.section2 .text2 p {
	font-size: 20px;
	line-height: 28px;
	color: #888888;
	font-weight: 300;
	letter-spacing: 0.2px;
	text-align: left;
}

.iphone2 {
	float: right;
	width: 50%;
	height: 100%;

}

.iphone-photo2 {
	background: url(/static/img/iphone2.png) no-repeat;
	max-width:380px;
	min-height: 640px;
	background-size: 100%;
	margin-top: 100px;
}

.section2 .video {
	position: absolute;
	margin-left: 80px;
	margin-top: 173px;
	width: 260px;
	height: 446px;
}

@media screen and (max-width: 760px) {
	#section2 {
		padding: 20px;
	}
	.text2 {
		max-width: 100%;
		float: none;
		margin-top: 0px;
	}
	.section2 .text2 h3 {
		font-size: 30px;
		line-height: 40px;
		text-align: center;
	}
	.section2 .text2 p {
		font-size: 16px;
		line-height: 24px;
		text-align: center;
	}
	.iphone2 {
		float: none;
		width: 100%;
	}
	.iphone-photo2 {
		background: url(/static/img/iphone2.png) no-repeat;
		max-width:380px;
		min-height: 640px;
		background-size: 100%;
		margin-top: 50px;
	}
	.section2 .video {
		display: none;
		visibility: hidden;
	}
}


@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
	#section2 {
		padding: 20px;
	}
	.iphone-photo2 {
		background: url(/static/img/iphone2.png) no-repeat;
		max-width:380px;
		min-height: 640px;
		background-size: 100%;
		margin-top: 30px;
	}
	.section2 .video {
		display: none;
		visibility: hidden;
	}
}

/* for high resolution display */

@media only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-device-pixel-ratio: 2) {
	.iphone-photo2 {
		background: url(/static/img/iphone2@2x.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
		 -webkit-background-size: contain;
		 -moz-background-size: contain;
		 -o-background-size: contain;
		 background-size: contain;
	}
}


@media only screen and (min-width : 1824px) {
	.section2 {
		width:100%;
		max-width: 960px;
	}

	.text2 {
		max-width: 460px;
		margin-top: 250px;
	}
	.section2 .text2 h3 {
	font-size: 50px;
	line-height: 62px;
	}

	.section2 .text2 p {
		font-size: 28px;
		line-height: 40px;
		font-weight: 300;
	}
	.iphone2 {
		width: 50%;
		height: 100%;
	}
	.iphone-photo2 {
		background: url(/static/img/iphone.png) no-repeat;
		max-width:500px;
		min-height: 842px;
		background-size: 100%;
	}
	.section2 .video {
	margin-left: 102px;
	margin-top: 192px;
	width: 316px;
	height: 563px;
	}
}
</style>
