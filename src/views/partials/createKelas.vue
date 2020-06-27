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
                                        <h4 class="card-title my-4 text-center">Form Tambah Data Kelas</h4>
                                        <hr>
                                        <form @submit.prevent="PostStore">
                                            <!-- <input type="text" id="id-sekolah-inp" v-model="dataKelas.school_id"> -->
                                            <div class="form-group">
                                                <label>Nama</label>
                                                <input type="text" class="form-control" v-model="dataKelas.name"
                                                    placeholder="Masukkan Nama">
                                            </div>
                                            <div class="form-group">
                                                <label>Jumlah Murid</label>
                                                <input type="number" class="form-control" v-model="dataKelas.total_students">
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
        name: "createKelas",
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
            const keySchool = localStorage.getItem('key-school');
            return {
                dataKelas: {
                    school_id: keySchool,
                },
            };
        },
        created() {
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
                axios.post('https://backendpwl.mammam.website/classrooms/', this.dataKelas)
                    .then((response) => {
                        this.$router.push({
                            name: 'AdminSekolah'
                        });
                        console.log(response.data.data);
                    }).catch(error => {
                    console.log(this.dataKelas);
                    
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