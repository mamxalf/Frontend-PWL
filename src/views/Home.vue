<template>
  <div class="row">
    <div class="col-md-6 my-auto">

      <div class="col-md-9 mx-auto">
        <div class="auth-form-light text-left p-5">
          <div class="brand-logo text-center">
            <img src="../assets/images/logo.png">
          </div>
          <h2 class="text-center font-weight-bold login-title mt-4">Hypesthetic Creative</h2>
          <h4 class="text-center font-weight-bold">Welcome, Choose your Account</h4>
          <div class="text-center mt-4 row">
            <div class="col">
              <router-link to="/loginFotografer">
                <i class="mdi text-center mdi-camera large"></i>
              </router-link>
            </div>
            <div class="col">
              <router-link to="/login">
                <i class="mdi text-center mdi-account-key"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="col-md-6 wall-login"><img src="../assets/images/login.png"></div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {},
  };
</script>

<style scoped>
  .mdi {
    color: #680d96;
    font-size: 4rem;
  }
</style>