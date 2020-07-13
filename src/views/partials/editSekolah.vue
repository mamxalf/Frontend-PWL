<template>
    <div id="sidebar-ico" class="sidebar-icon-only">
        <div class="container-scroller">
            <!-- partial:partials/_navbar.html -->
            <Navbar />
            <!-- partial -->
            <div class="container-fluid page-body-wrapper">
                <!-- partial:partials/_sidebar.html -->
                <Sidebar />

                <div class="main-panel">
                    <div class="content-wrapper">
                        <div id="main_konten">
                            <div class="col-lg-12 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <router-link to="/sekolah"><span class="btn btn-danger btn-fw my-2">Back</span></router-link>
                                        <h4 class="card-title my-4 text-center">Form Edit Data Sekolah</h4>
                                        <hr>
                                        <form @submit.prevent="PostUpdate">

                                            <div class="form-group">
                                                <label>Nama</label>
                                                <input type="text" class="form-control" v-model="dataFg.name"
                                                    placeholder="Masukkan Nama">
                                            </div>
                                            <div class="form-group">
                                                <label>Jumlah Kelas</label>
                                                <input type="number" class="form-control" v-model="dataFg.total_classrooms">
                                            </div>

                                            <button type="submit" class="btn btn-md btn-primary mr-2">Update</button>
                                            <router-link to="/sekolah"><span class="btn btn-md btn-secondary btn-fw my-2">Back</span></router-link>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Footer />

                </div>
                <!-- main-panel ends -->
            </div>
            <!-- page-body-wrapper ends -->
        </div>
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue';
    import Navbar from '@/components/Navbar.vue';
    import Sidebar from '@/components/Sidebar.vue';
    import axios from "axios";
    import $ from 'jquery';

    export default {
        name: "editSekolah",
        components: {
            Footer,
            Navbar,
            Sidebar,
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
        data() {
            return {
                dataFg: {},
            };
        },
        created() {
            axios.get(`http://fp-pwl.test/school/${this.$route.params.id}`)
                .then((response) => {
                this.dataFg = response.data.data;
            });
            const token = localStorage.getItem('token');
            if (token) {
                this.token = token;
            } else {
                this.$router.push({
                    name: 'Home'
                });
            }
        },
        methods: {
            logOut: function () {
                alert("Logout");
                localStorage.clear();
                this.$router.push({
                    name: 'Home'
                });
            },
            // PostStore() {
            //     axios.post('http://fp-pwl.test/fotografers/', this.dataFg)
            //         .then((response) => {
            //             this.$router.push({
            //                 name: 'AdminFotografer'
            //             });
            //             console.log(response.data.data);
            //         }).catch(error => {
            //         this.validation = error.response.data.data;
            //     });
            // }
            PostUpdate() {
                axios.put(`http://fp-pwl.test/school/${this.$route.params.id}`, this.dataFg)
                    .then((response) => {
                        this.$router.push({
                            name: 'AdminSekolah'
                        });
                        console.log(response);
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    };
</script>

<style scoped>
    p {
        text-align: center;
    }
</style>