<template>
  <div id="articles">
    <div class="inner">
      <div class="labels pt-5">
        <ul>
          <li
            v-for="label in labels"
            :key="label._id"
            class="labelItem pr-4"
            @click="changeLabel"
            :id="label._id"
            :class="{ active: label._id === active }"
          >{{label.name}}</li>
        </ul>
      </div>
      <div class="pt-4 articles clearfix">
        <router-link class="card pr-4 py-4" v-for="article in showArticles" :key="article._id" :to='`/article/${article._id}`' tag="div">
          <img :src="article.img" class="w-100" />
          <p class="pt-2 fs-xs articleTime">{{article.time}}</p>
          <h1 class="fs-md" style="font-weight:lighter">{{article.title}}</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: [],
      active: "01",
      articles: []
    };
  },
  methods: {
    async fetchLabels() {
      const res = await this.$http.get("/labels/list");
      this.labels = res.data;
      this.labels.unshift({ name: "全部", _id: "01" });
    },
    async fetchArticles() {
      const res = await this.$http.get("/articles/list");
      this.articles = res.data;
    },
    changeLabel(event) {
      this.active = event.target.id;
    }
  },
  computed: {
    showArticles: function() {
      if (this.active === "01") {
        return this.articles
      } else {
        let activeArticles = []
        for (let i = 0; i < this.articles.length; i++) {
          for (let j = 0; j < this.articles[i].labels.length; j++) {
            if (this.articles[i].labels[j]._id === this.active) {
              activeArticles.push(this.articles[i]);
            }
          }
        } 
        return activeArticles;
      }
    }
  },
  created() {
    this.fetchLabels();
    this.fetchArticles();
  }
};
</script>

<style lang="scss" scoped>
.labelItem {
  display: inline-block;
  color: #959595;
  &.active {
    color: #090909;
  }
  cursor: pointer;
  position: relative;
}
.labelItem::before {
  color: rgba(0, 0, 0, 0);
  content: ".";
  font-size: 30px;
  left: 0px;
  pointer-events: none;
  position: absolute;
  text-shadow: rgba(0, 0, 0, 0) 0px 0px;
  top: -32px;
  transition: text-shadow 0.3s ease 0s, color 0.3s ease 0s;
  
}
.labelItem.active::before {
    color: rgb(34, 34, 34);
    text-shadow: rgb(34, 34, 34) 7px 0px, rgb(34, 34, 34) 14px 0px, rgb(34, 34, 34) 21px 0px;
  }
.card {
  width: calc(33.33% - 16px);
  float: left;
  cursor: pointer;
  img {
    height: 250px;
  }
  .articleTime {
    color: #959595;
  }
  span {
    color: #959595;
  }
}
.card:nth-child(2n + 3) {
  padding-right: 0;
}
</style>