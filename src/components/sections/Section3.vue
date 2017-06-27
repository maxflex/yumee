<template>
  <div class="section" id="section3">
      <div class="section3">
          <div class="text3">
              <h3>Share your events with the world</h3>
              <p>Select your event, edit the photo and share it on social media or with friends.</p>
          </div>
          <video autoplay loop muted id="video" class="video">
              <source src="video/video3.mp4" type="video/mp4">
              <source src="http://daysapp.co/video/movie3.ogv" type="video/ogv">
              <source src="http://daysapp.co/video/movie3.webm" type="video/webm">
          </video>
          <div class="iphone3">
              <div class="iphone-photo3"></div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='scss'>
#section3 {
	background: #f4f4f4;
}


.section3 {
	width:100%;
	max-width: 760px;
	margin: 0px auto;
}

.text3 {
	max-width: 360px;
	float: right;
	margin-top: 140px;
}

.section3 .text3 h3 {
font-size: 40px;
line-height: 52px;
color: #343434;
font-weight: 300;
letter-spacing: 0.2px;
text-align: left;
}

.section3 .text3 p {
	font-size: 20px;
	line-height: 28px;
	color: #888888;
	font-weight: 300;
	letter-spacing: 0.2px;
	text-align: left;
}

.iphone3 {
	width: 50%;
	height: 100%;

}

.iphone-photo3 {
	background: url(/static/img/iphone3.png) no-repeat;
	max-width:380px;
	min-height: 640px;
	background-size: 100%;
	margin-top: 100px;
}

.section3 .video {
	position: absolute;
	margin-left: 60px;
	margin-top: 73px;
	width: 260px;
	height: 446px;
}

@media screen and (max-width: 760px) {
	#section3 {
		padding: 20px;
	}
	.text3 {
		max-width: 100%;
		float: none;
		margin-top: 0px;
	}
	.section3 .text3 h3 {
		font-size: 30px;
		line-height: 40px;
		text-align: center;
	}
	.section3 .text3 p {
		font-size: 16px;
		line-height: 24px;
		text-align: center;
	}
	.iphone3 {
		float: none;
		width: 100%;
	}
	.iphone-photo3 {
		background: url(/static/img/iphone3.png) no-repeat;
		max-width:380px;
		min-height: 640px;
		background-size: 100%;
		margin-top: 50px;
	}
	.section3 .video {
		display: none;
		visibility: hidden;
	}
}

@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
	#section3 {
		padding: 20px;
	}
	.iphone-photo3 {
		background: url(/static/img/iphone3.png) no-repeat;
		max-width:380px;
		min-height: 640px;
		background-size: 100%;
		margin-top: 30px;
	}
	.section3 .video {
		display: none;
		visibility: hidden;
	}

}

/* for high resolution display */

@media only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-device-pixel-ratio: 2) {
	.iphone-photo3 {
		background: url(/static/img/iphone3@2x.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
		 -webkit-background-size: contain;
		 -moz-background-size: contain;
		 -o-background-size: contain;
		 background-size: contain;
	}
}


@media only screen and (min-width : 1824px) {
	.section3 {
		width:100%;
		max-width: 960px;
	}

	.text3 {
		max-width: 460px;
		margin-top: 250px;
	}
	.section3 .text3 h3 {
	font-size: 50px;
	line-height: 62px;
	}

	.section3 .text3 p {
		font-size: 28px;
		line-height: 40px;
		font-weight: 300;
	}
	.iphone3 {
		width: 50%;
		height: 100%;
	}
	.iphone-photo3 {
		background: url(/static/img/iphone.png) no-repeat;
		max-width:500px;
		min-height: 842px;
		background-size: 100%;
	}
	.section3 .video {
	margin-left:82px;
	margin-top: 92px;
	width: 316px;
	height: 563px;
	}
}
</style>
