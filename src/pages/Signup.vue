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
      <h1 class="display-3">POSTMAN Sign up</h1>
    </section>
    <form class="form-signin">
      <input
        v-model="input.name"
        type="text"
        id="inputName"
        class="text-center"
        placeholder="Name"
        required
      />
      <!-- Name -->
      <label for="inputName" class="sr-only">Name</label>
      <br />
      <input
        v-model="input.surname"
        type="text"
        id="inputSurname"
        class="text-center"
        placeholder="Surname"
        required
      />
      <!-- Surname -->
      <label for="inputSurname" class="sr-only">Surname</label>
      <br />
      <input
        v-model="input.date"
        type="date"
        id="inputBday"
        class="text-center"
        placeholder="Birthday"
        required
      />
      <!-- Bday -->
      <label for="inputBday" class="sr-only">Birthday</label>
      <br />
      <input
        v-model="input.email"
        type="email"
        id="inputEmail"
        class="text-center"
        placeholder="Email address"
        required
      />
      <label for="inputEmail" class="sr-only">Email address</label>
      <!-- Email -->
      <br />
      <label for="inputNewpassword" class="sr-only">New password</label>
      <!-- New Password -->
      <input
        v-model="input.password"
        type="password"
        id="inputNewpassword"
        class="text-center"
        placeholder="New password(min 8 charachters)"
        minlength="8"
        required
      />
      <br />
      <label for="inputAgainpassword" class="sr-only">Confirm password</label>
      <!-- Confirm Password -->
      <input
        v-model="input.againpassword"
        type="password"
        id="inputConfirmpassword"
        class="mb-3 text-center"
        placeholder="Confirm password"
        minlength="8"
        required
      />
      <div class="checkbox mb-3"></div>
      <button
        class="btn btn-lg btn-primary"
        width="100"
        type="button"
        :disabled="!passwordControl"
        @click="onlogin"
      >Sign up</button>
      <p v-if="passwordControl">Match is true!!!</p>
      <p v-else>Match is false!!!</p>
    </form>
  </div>
</body>
</template>

<script>
import defaultMixin from "@/mixins/default";

export default {
  mixins: [defaultMixin],

  data() {
    return {
      apiKey: "users/register",
      input: {
        name: "",
        surname: "",
        date: "",
        email: "",
        password: "",
        againpassword: ""
      }
    };
  },
  computed: {
    passwordControl() {
      const vm = this;
      if (vm.input.password === vm.input.againpassword) {
        console.log("Match is true!!!", true);
        return (vm.activeClass = true);
      }
      console.log("Match is false!!!", false);
      return (vm.errorClass = false);
    }
  },
  methods: {
    async onlogin() {
      if (this.input.password === this.input.againpassword) {
        console.log("Match is true!!!", true);
        const vm = this;

        const data = {
          name: vm.input.name,
          surname: vm.input.surname,
          date: vm.input.date,
          mail: vm.input.email,
          password: vm.input.password
        };

        await vm.postData(data);
        alert("Your signup operation was succesfull!")
        window.open("/")
      } else {
        console.log("Match is false!!!", false);
      }
    }
  }
};
</script>

<style>
#inputBday {
  margin-bottom: 10px;
  width: 400px;
}
#inputSurname {
  margin-bottom: 10px;
  width: 400px;
}
#inputName {
  margin-bottom: 10px;
  width: 400px;
}
#inputEmail {
  margin-bottom: 10px;
  width: 400px;
}
#inputNewpassword {
  margin-bottom: 10px;
  width: 400px;
}
#inputConfirmpassword {
  margin-bottom: 10px;
  width: 400px;
}
#inputTel {
  margin-bottom: 10px;
  width: 400px;
}
</style>
