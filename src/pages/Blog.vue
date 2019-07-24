<template>
<body class="text-center">
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <!--Icon Part-->
      <a href class="navbar-brand">
        <i class="fas fa-binoculars mr-2"></i> POSTMAN
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
        cols="1"
        rows="20"
        placeholder="Enter post here..."
        required
        float="left"
      ></textarea>
      <input type="url" id="inputUrl" class="text-left" placeholder="Enter url of the photo..." required float="left">
      <a href="url" type="link"></a>
      <button
        class="btn btn-lg btn-primary"
        width="100"
        type="button"
      >Send</button>
    </div>
  </form>
</body>
</template>

<script>
export default {};
</script>

<style>
#inputPost {
  width: 600px;
  height: 400px;
}
#inputUrl {
  width: 400px;
}
</style>