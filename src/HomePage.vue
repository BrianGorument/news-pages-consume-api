<template>
  <div class="home">
    <div class="background"></div>
    <!-- Input pencarian -->
      <div class="input-group ml-auto d-none d-lg-flex" style="width: 100%; max-width: 300px;">
        <input type="text" v-model="searchQuery" @input="searchNews" placeholder="Cari berita...">
     </div>

    <!-- Daftar berita -->
    <div class="news-list">
      <NewsItem v-for="(article, index) in filteredArticles" :key="index" :article="article" />
    </div>
  </div>
</template>
  
  <script>
  import { getNews } from './services/newsServices';
  import NewsItem from './components/NewsItems.vue';
  import { simpanBerita, ambilBeritaDibaca } from './assets/localstorage';

  
  export default {
  components: {
    NewsItem,
  },
  data() {
    return {
      articles: [],
      searchQuery: '', 
      filteredArticles: [] 
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      this.articles = await getNews();
      this.filteredArticles = this.articles;
    },
    searchNews() {
      if (!this.searchQuery) {
        this.filteredArticles = this.articles;
        return;
      }
      this.filteredArticles = this.articles.filter(article =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    simpanBeritaLocal(berita) {
      simpanBerita(berita);
    },
    ambilBeritaLocal() {
      return ambilBeritaDibaca(); 
    }
  },
};
</script>

<style>
.search-bar {
  width: 90%;
  height: 50px;
  font-size: 18px;
  padding: 10px;
  margin: 10px auto;
  position: fixed; 
  top: 0;
  z-index: 1;
}



.news-list {
  display: flex;
  flex-wrap: wrap;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('assets/background.jpg');
  background-size: cover;
  filter: blur(350px);
  z-index: -1;
}
</style>