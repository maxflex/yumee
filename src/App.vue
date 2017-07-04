<template>
  <div id="fullpage">
    <Main></Main>
    <Section1></Section1>
  </div>
</template>

<script>
import Main from '@/components/sections/Main'
import Section1 from '@/components/sections/Section1'
import Section2 from '@/components/sections/Section2'
import Section3 from '@/components/sections/Section3'
import Section4 from '@/components/sections/Section4'

export default {
  name: 'app',
  components: { Main, Section1, Section2, Section3, Section4 },
  ready () {
    // $('.logo').addClass('animated fadeInUp visible')
    // setTimeout(() => $('h1').addClass('animated fadeInUp visible'), 1000)
    // setTimeout(() => $('h2').addClass('animated fadeInUp visible'), 2000)
    // setTimeout(() => $('.scroll-down').addClass('animated fadeInUp visible'), 2600)
    //
    // $('#fullpage').fullpage({
    //   navigation: true,
    //   navigationPosition: 'right',
    //   responsive: 900,
    //   keyboardScrolling: true
    // })
  }
}
</script>

<style lang='scss'>
  .wrapper {
  }
</style>
