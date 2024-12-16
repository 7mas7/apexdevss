<template>
  <div class="h-screen">
    <Header/>
    <div class="p-2 h-[80%]">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>
<script type="text/javascript">
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>