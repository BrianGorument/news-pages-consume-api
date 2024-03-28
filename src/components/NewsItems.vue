<template>
  <div class="grid-container">
    <div class="image">
        <img :src="article.urlToImage" alt="News Image">
    </div>
        <div class="news-item"></div>
            <h3>{{ article.title }}</h3>
            <h3>Name : {{ article.source.name }}</h3>
            <p>{{ article.description }}</p>
            <p>Author: {{ article.author }}</p>
            <a :href="article.url" target="_blank">click here to Read more :</a>
            <p>{{ formattedDate }}</p>
        </div>
</template>
  
  <script>
  export default {
    props: {
      article: Object,
    },
    computed: {
      formattedDate() {
        const date = new Date(this.article.publishedAt);
        return date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
      },
    },
  };
  </script>
  
<style scoped>

.news-item {
  border: 2px solid #ccc;
  padding: 10px;
  margin: 10px;
}
img {
  max-width: 500px;
  max-height: 500px;
  height: auto;
}

</style>
  