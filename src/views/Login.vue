<template>
  <div class="row">
        <div class="col-md-6 my-auto">

            <div class="col-md-9 mx-auto">
                <div class="auth-form-light text-left p-5">
                    <div class="brand-logo text-center">
                        <img src="../assets/images/logo.png">
                    </div>
                    <h2 class="text-center font-weight-bold login-title mt-4">Hypesthetic Creative</h2>
                    <h4 class="text-center font-weight-bold">Admin</h4>
              <form @submit.prevent="onSubmit()">
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" v-model="username" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" v-model="password" />
                </div>
                <div class="row">
                  <div class="col">
                    <div class="float-right">
                      <button type="submit" class="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
                </div>
            </div>

        </div>
        <div class="col-md-6 wall-login"><img src="../assets/images/login.png"></div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      currentRouteName: "",
      name: localStorage.getItem('name'),
    };
  },
  created() {
    this.currentRouteName = this.$route.name;
  },
  methods: {
    onSubmit() {
      if (this.username.trim() && this.password.trim()) {
        let formData = new FormData();
        formData.append("username", this.username.trim());
        formData.append("password", this.password);

        const options = {
          url: "http://fp-pwl.test/auth/login",
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data: formData
        };

        axios(options)
          .then(response => {
            const name = response.data.name;
            localStorage.setItem('name', name);

            const token = response.data.token;
            localStorage.setItem('token', token);
            
            const getToken = localStorage.getItem('token');

            if (getToken) {
              this.$router.push({
                name: "Admin",
                params: {
                  token: token
                }
              });
            }
          })
          .catch(e => {
            alert(e + "\n" + "Username / password yang dimasukkan salah.");
          });
      }
    }
  }
};
</script>