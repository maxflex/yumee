<template>
  <div class="section" id="section1">
      <div class="section1">
          <div class="text">
              <h3>Домен продаётся!</h3>
              <p>Домен продаётся вместе с брендом и логотипом в векторном формате. Писать на <a href='mailto:m@kolyadin.com'>m@kolyadin.com</a></p>
          </div>
          <video autoplay loop muted id="video" class="video">
              <source src="video/video1.mp4" type="video/mp4">
              <source src="http://daysapp.co/video/movie1.ogv" type="video/ogv">
              <source src="http://daysapp.co/video/movie1.webm" type="video/webm">
          </video>
          <div class="iphone">
              <div class="iphone-photo"></div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='scss'>
#section1 {
	background: #ffffff; /* Old browsers */
	background: -moz-linear-gradient(top,  #ffffff 0%, #f4f4f4 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#f4f4f4)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #ffffff 0%,#f4f4f4 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #ffffff 0%,#f4f4f4 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #ffffff 0%,#f4f4f4 100%); /* IE10+ */
	background: linear-gradient(to bottom,  #ffffff 0%,#f4f4f4 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f4f4f4',GradientType=0 ); /* IE6-9 */
}


.section1 {
	width:100%;
	max-width: 760px;
	margin: 0px auto;
}

.text {
	max-width: 360px;
	float: right;
	margin-top: 140px;
}

.section1 .text h3 {
font-size: 40px;
line-height: 52px;
color: #343434;
font-weight: 300;
letter-spacing: 0.2px;
text-align: left;
}

.section1 .text p {
	font-size: 20px;
	line-height: 28px;
	color: #888888;
	font-weight: 300;
	letter-spacing: 0.2px;
	text-align: left;
}



.iphone {
	width: 50%;
	height: 100%;

}

.iphone-photo {
	background: url(/static/img/iphone1.png) no-repeat;
	max-width:380px;
	min-height: 640px;
	background-size: 100%;
	margin-top: 100px;
}

.section1 .video {
	position: absolute;
	margin-left: 60px;
	margin-top: 73px;
	width: 260px;
	height: 446px;
}





@media screen and (max-width: 760px) {
	#section1 {
		padding: 20px;
	}
	.text {
		max-width: 100%;
		float: none;
		margin-top: 0px;
	}
	.section1 .text h3 {
		font-size: 30px;
		line-height: 40px;
		text-align: center;
	}
	.section1 .text p {
		font-size: 16px;
		line-height: 24px;
		text-align: center;
	}
	.iphone {
		float: none;
		width: 100%;
	}
	.iphone-photo {
		background: url(/static/img/iphone1.png) no-repeat;
		max-width:380px;
		min-height: 640px;
		background-size: 100%;
		margin-top: 50px;
	}
	.section1 .video {
		display: none;
		visibility: hidden;
	}
}


/* iPads (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
	#section1 {
		padding: 20px;
	}
	.iphone-photo {
		background: url(/static/img/iphone1.png) no-repeat;
		max-width:380px;
		min-height: 640px;
		background-size: 100%;
		margin-top: 30px;
	}
	.section1 .video {
		display: none;
		visibility: hidden;
	}
}

/* for high resolution display */

@media only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min-device-pixel-ratio: 2) {
	.iphone-photo {
		background: url(/static/img/iphone1@2x.png) no-repeat;
		background-size: 100% 100%;
		background-position: center;
		 -webkit-background-size: contain;
		 -moz-background-size: contain;
		 -o-background-size: contain;
		 background-size: contain;
	}
 }



@media only screen and (min-width : 1824px) {
	.section1 {
		width:100%;
		max-width: 960px;
	}

	.text {
		max-width: 460px;
		margin-top: 250px;
	}
	.section1 .text h3 {
		font-size: 50px;
		line-height: 62px;
	}

	.section1 .text p {
		font-size: 28px;
		line-height: 40px;
		font-weight: 300;
	}
	.iphone {
		width: 50%;
		height: 100%;
	}
	.iphone-photo {
		background: url(/static/img/iphone.png) no-repeat;
		max-width:500px;
		min-height: 842px;
		background-size: 100%;
	}
	.section1 .video {
		margin-left:82px;
		margin-top: 92px;
		width: 316px;
		height: 563px;

	}
}
</style>
