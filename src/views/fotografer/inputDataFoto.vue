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
                                        <router-link to="/inputData"><span class="btn btn-danger btn-fw my-2">Back</span></router-link>
                                        <h4 class="card-title my-4 text-center">Form Input data Foto</h4>
                                        <hr>
                                        <form @submit.prevent="PostStore">

                                            <div class="form-group">
                                                <label>Nama</label>
                                                <input type="text" class="form-control" v-model="dataValue.name"
                                                    placeholder="Masukkan Nama">
                                            </div>
                                            <div class="form-group">
                                                <label>Jumlah Kelas</label>
                                                <input type="text" class="form-control" v-model="dataValue.file_name" placeholder="Masukkan Nama File Foto">
                                            </div>

                                            <button type="submit" class="btn btn-md btn-primary mr-2">SIMPAN</button>
                                            <button type="reset" class="btn btn-md btn-secondary">RESET</button>

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
        name: "inputDataFoto",
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
                dataValue: {},
            };
        },
        created() {
            const keySch = localStorage.setItem('key-sch', this.$route.params.id);
            if (keySch) {
                this.keySch = keySch;
            }
            
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
            PostStore() {
                axios.post('http://fp-pwl.test/inputs/', {
                    schedule_id: localStorage.getItem('key-sch'),
                    name: this.dataValue.name,
                    file_name: this.dataValue.file_name
                }).then((response) => {
                        this.$router.push({
                            name: 'inputData'
                        });
                        console.log(response.data.data);
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