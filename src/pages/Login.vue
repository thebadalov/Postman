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
      <h1 class="display-3">POSTMAN LOGIN</h1>
    </section>
    <form class="form-signin">
      <input type="email" id="inputEmail" class="text-center" placeholder="Email address" />
      <label for="inputEmail" class="sr-only">Email address</label>
      <br />
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="mb-3 text-center" placeholder="Password" />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary" width="100" type="button" @click="apiget()">Sign in</button>
    </form>
  </div>
</body>
</template>
<script>

export default {
  methods: {
    async apiget() {
      const vm = this;

      const response = await fetch("http://localhost:62324/api/users", {
        
       method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        referrer: "no-referrer" // no-referrer, *client
      }); // parses JSON response into native JavaScript objects

      var result = await response.json();
    }
  }
};
</script>
<style>
#header {
  background: white;
}

#inputEmail {
  margin-bottom: 10px;
  width: 400px;
}
#inputPassword {
  width: 400px;
}
</style>