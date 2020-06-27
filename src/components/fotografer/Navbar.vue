<template>
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo font-weight-bold" href="index.html">Hypesthetic Creative</a>
            <a class="navbar-brand brand-logo-mini" href="index.html"><img src="../../assets/images/logo.png"
                    alt="logo" /></a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-stretch">
            <button class="navbar-toggler navbar-toggler align-self-center" type="button" id="btn-nav"
                data-toggle="minimize">
                <span class="mdi mdi-menu"></span>
            </button>
            <h5 class="my-auto">Dashboard Fotografer</h5>
            <ul class="navbar-nav navbar-nav-right">
                <li id="nav-profile-obj" class="nav-item nav-profile dropdown">
                    <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown"
                        aria-expanded="false">
                        <div class="nav-profile-text">
                            <p class="mb-1 text-black" id="nama-user-login">{{ name }}</p>
                        </div>
                    </a>
                    <div id="dropdown-out" class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" v-on:click="logOut()">
                            <i class="mdi mdi-logout mr-2 text-primary"></i> Signout </a>
                    </div>
                </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" id="button-nav"
                type="button" data-toggle="offcanvas">
                <span class="mdi mdi-menu"></span>
            </button>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: 'NavbarFg',
        data(){
            return {
                name: localStorage.getItem('name'),
            }
        },
        mounted: function () {
            $('#button-nav').click(function () {
                $('#sidebar').toggleClass('active');
            });
            $('#btn-nav').click(function () {
                $('#sidebar-ico').toggleClass('sidebar-icon-only');
            });
            $('#profileDropdown').click(function () {
                $('#nav-profile-obj').toggleClass('show');
                $('#dropdown-out').toggleClass('show');
            });
        },
        methods: {
            logOut: function () {
                alert("Logout");
                localStorage.clear();
                this.$router.push({
                    name: 'Home'
                });
            }
        }
    }
</script>

<style>

</style>