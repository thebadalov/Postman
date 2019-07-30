<template>
<body class="text-center">
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <!--Icon Part-->
      <a href class="navbar-brand">
        <i class="fas fa-binoculars mr-2"></i> POSTMAN
      </a>
      <a class="nav-link" @click="$router.push('home')" style="color:aliceblue">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/mobile-home.png" /> Home
      </a>
    </div>
  </nav>
  <div class="text-center">
    <section id="header" class="jumbotron text-center">
      <h1 class="display-3">POSTMAN New Post</h1>
    </section>
  </div>
  <form class="signin">
    <div>
      <textarea
        id="inputPost"
        class="text-left"
        v-model="input.title"
        placeholder="Enter title of post..."
        float="left"
      ></textarea>
      <textarea
        id="inputPost"
        class="text-left"
        v-model="input.writing"
        placeholder="Enter post here..."
        float="left"
      ></textarea>
      <input
        type="url"
        id="inputUrl"
        v-model="input.url"
        class="text-left"
        placeholder="Enter url of the photo..."
        float="left"
      />
      <img src="input.url" alt="">
      <button class="btn btn-lg btn-primary" width="100" type="button" @click="onsend">Send</button>
    </div>
  </form>
</body>
</template>

<script>
import defaultMixin from "@/mixins/default";

export default {
  mixins: [defaultMixin],

  data() {
    return {
      apiKey: "blogs",
      input: {
        title: "",
        writing: "",
        url: ""
      }
    };
  },

  methods: {
    async onsend() {
      const vm = this;

      const data = {
        title: vm.input.title,
        writing: vm.input.writing,
        url: vm.input.url
      };

      await vm.postData(data);
    }
  }
  
};
</script>

<style>
#header {
  background: url("../imgs/header.jpeg");
}
#inputPost {
  width: 600px;
  height: 400px;
}
#inputUrl {
  width: 400px;
}
</style>