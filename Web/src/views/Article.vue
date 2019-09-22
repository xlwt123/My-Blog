<template>
  <div id="article">
    <top-bar></top-bar>
    <home-header></home-header>
    <article-content :article="article"></article-content>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import HomeHeader from '../components/Header.vue'
import ArticleContent from '../components/Content.vue'

export default {
  components: {
    TopBar,
    HomeHeader,
    ArticleContent
  },
  props: {
    id: {}
  },
  data() {
    return {
      article: {}
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.article = res.data;
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style lang="scss" scoped>

</style>