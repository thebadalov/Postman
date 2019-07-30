<template>
<body class="text-center">
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <!--Icon Part-->
      <a href class="navbar-brand">
        <i class="fas fa-binoculars mr-2"></i> POSTMAN
      </a>
      <a class="nav-link" @click="$router.push('signup')" style="cursor: pointer" id="menu">
        <img src="https://img.icons8.com/windows/32/000000/add-user-male.png" />Sign Up
      </a>
    </div>
  </nav>
  <div class="text-center">
    <section id="header" class="jumbotron text-center">
      <h1 class="display-3">POSTMAN LOGIN</h1>
    </section>
    <form class="form-signin">
      <input
        type="email"
        id="inputEmail"
        class="text-center"
        placeholder="Email address"
        v-model="input.email"
      />
      <label for="inputEmail" class="sr-only">Email address</label>
      <br />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="mb-3 text-center"
        placeholder="Password"
        v-model="input.password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        class="btn btn-lg btn-primary"
        width="100"
        type="button"
        @click="onAuthenticate"
      >Sign in</button>
    </form>
  </div>
</body>
</template>
<script>
import service from "@/mixins/default.js";

export default {
  mixins: [service],
  data() {
    return {
      apiKey: "users/authenticate",
      input: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    async onAuthenticate() {
      const vm = this;

      vm.$root.user = {
        email: vm.input.email,
        password: vm.input.password
      };

      var user = await vm.postData(vm.input);

      if (user) {
        vm.$root.user = user;

        vm.$router.push("/home");
      } 
      else { 
        vm.$root.user = {};
        
      }
    }
  }
};
</script>
<style>
#header {
  background: url("../imgs/header.jpeg");
}
#inputEmail {
  margin-bottom: 10px;
  width: 400px;
}
#inputPassword {
  width: 400px;
}
#menu {
  color: aliceblue;
}
</style>