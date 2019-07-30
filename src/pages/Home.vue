<template>
<body>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <!--Navbar Part-->
      <a class="navbar-brand" href="#"></a>

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#" style="color:aliceblue">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/mobile-home.png" />
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            tabindex="-1"
            aria-disabled="true"
            @click="$router.push('info')"
            style="cursor: pointer; color:aliceblue"
          >
            <img src="https://img.icons8.com/windows/32/000000/info.png" />Info
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="$router.push('/')" style="cursor: pointer; color:aliceblue">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/exit.png" />
            Exit
          </a>
        </li>
      </ul>
      <!--Icon Part-->
      <a href class="navbar-brand">
        <i class="fas fa-binoculars mr-2"></i>
        {{ $root.user && $root.user.name + ' ' + $root.user.surname}}
      </a>
      <!--Search Part-->
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <section id="header" class="jumbotron text-center">
    <h1 class="display-3">POSTMAN</h1>
    <p class="lead">The place of the best posts :) Don't think, just start!!!</p>
    <a href class="btn btn-primary" @click="$router.push('blog')">Share posts with us</a>
  </section>

  <div id="app">
    <section id="gallery">
      <div class="container">
        <div class="row">
          <div v-for="item in blogItems" :key="item.id" class="col-lg-4 mb-4">
            <div class="card">
              <img class="card-img-top" :src="item.url" alt />
              <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.writing}}</p>
                <a href class="btn btn-outline-success btn-sm">Download</a>
                <a href class="btn btn-outline-danger btn-sm">
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</body>
</template>

<script>
import defaultMixin from "@/mixins/default";
export default {
  mixins: [defaultMixin],
  computed: {
    blogItems() {
      const vm = this;

      return vm.blogDataItems;
    }
  },

  created() {
    const vm = this;
    if (!vm.$root.user.hasOwnProperty("password")) {
      vm.$router.push("/");
    }
    vm.getData();
  },
  data() {
    return {
      apiKey: "blogs"
    };
  },
};
</script>
<style>
#header {
  background: url("../imgs/header.jpeg");
}
#menu {
  color: aliceblue !important;
}

