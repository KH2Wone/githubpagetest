<template>
  <!--헤더 영역 시작-->
  <Header></Header>
  <!--헤더 영역 끝-->

  <!--비쥬얼 영역 시작-->
  <Section1></Section1>
  <!--비쥬얼 영역 끝-->

  <!--about 영역 시작-->
  <myInfo></myInfo>
  <!--about 영역 끝-->
  
  <!--포토폴리오 영역 시작-->
  <Portfolio></Portfolio>
  <!--포토폴리오 영역 끝-->
  
  <!--푸터 영역 시작-->
  <Footer></Footer>
  <!--푸터 영역 끝-->
</template>

<script setup>
import Header from './components/header/header.vue'
import Section1 from './components/section/section1.vue'
import myInfo from './components/section/myInfo.vue'
import Portfolio from './components/section/portfolio.vue'
import Footer from './components/footer/footer.vue'

</script>

<style scoped>
.page{
  width:100%;
}
</style>
