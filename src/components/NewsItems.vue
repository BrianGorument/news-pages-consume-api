<template>
   <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7 px-0">
                        <img class="img-fluid h-100" :src="article.urlToImage" style="object-fit: cover;">
                        <div class="overlay">
                            <div class="mb-2">
                              <h3>{{ article.title }}</h3>
                              <h3>Name : {{ article.source.name }}</h3>
                              <a :href="article.url" target="_blank">click here to Read more :</a> 
                              <p>{{ article.description }}</p>
                              <p>Author: {{ article.author }}</p>
                              <p>{{ formattedDate }}</p>
                            </div>
                         </div>
            </div>
        </div>
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


.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  
}

</style>
  