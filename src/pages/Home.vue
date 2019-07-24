<template>
<body>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <!--Navbar Part-->
      <a class="navbar-brand" href="#"></a>

      <ul class="nav nav-tabs" >
        <li class="nav-item">
          <a class="nav-link" href="#" id="menu">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="$router.push('login')" id="menu" style="cursor: pointer">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="$router.push('signup')" style="cursor: pointer" id="menu">Sign Up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" tabindex="-1" aria-disabled="true"  @click="$router.push('info')" style="cursor: pointer" id="menu">Info</a>
        </li>
      </ul>
      <!--Icon Part-->
      <a href class="navbar-brand">
        <i class="fas fa-binoculars mr-2"></i> POSTMAN
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
          <div class="col-lg-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="../imgs/pattern1.jpeg" alt />
              <div class="card-body">
                <h5 class="card-title">Elon Mask</h5>
                <p class="card-text">
                  If something is important enough YOU SHOULD TRY even if the
                  probable outcome is FAILURE
                </p>
                <a href class="btn btn-outline-success btn-sm">Download</a>
                <a href class="btn btn-outline-danger btn-sm">
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="../imgs/pattern2.jpeg" alt />
              <div class="card-body">
                <h5 class="card-title">Steve Jobs</h5>
                <p class="card-text">Details matter, it's worth waiting to get it right.</p>
                <a href class="btn btn-outline-success btn-sm">Download</a>
                <a href class="btn btn-outline-danger btn-sm">
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="../imgs/pattern3.jpeg" alt />
              <div class="card-body">
                <h5 class="card-title">Corey Ferdman</h5>
                <p class="card-text">I have led a pretty colorful life!</p>
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
export default {
  
};
</script>
<style>
#header {
  background: url("../imgs/header.jpeg");
}
#menu{
    color:aliceblue;
}
</style>
