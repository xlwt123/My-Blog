<template>
  <div id='home'>
    <top-bar></top-bar>
    <home-header></home-header>
    <articles></articles>
    <myself></myself>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import HomeHeader from '../components/Header.vue'
import Articles from '../components/Articles.vue'
import Myself from '../components/Myself.vue'

export default {
  components: {
    TopBar,
    HomeHeader,
    Articles,
    Myself
  }
}
</script>

<style scoped>

</style>