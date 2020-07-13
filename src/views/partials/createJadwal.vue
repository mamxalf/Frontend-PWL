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
                                        <router-link :to="{name: 'AdminKelas', params: { id: valKey }}" class="btn btn-md btn-danger mr-2">Back</router-link>
                                        <h4 class="card-title my-4 text-center">Form Tambah Jadwal Sesi Pemotretan</h4>
                                        <hr>
                                        <form @submit.prevent="PostStore">

                                            <!-- <div class="form-group">
                                                <label>Nama Kelas</label>
                                                <input type="text" class="form-control" v-model="dataJadwal.name"
                                                    placeholder="Masukkan Nama">
                                            </div> -->
                                            <!-- <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="">Nama Fotografer</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Nama Fotografer"
                                                        v-model="dataJadwal.fotografer_id">
                                                </div>
                                            </div> -->
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="">Tanggal</label>
                                                    <input type="date" class="form-control" v-model="dataJadwal.date">
                                                </div>
                                                <div class="form-row col-md-6">
                                                    <div class="form-group col-6">
                                                        <label>Jam / Waktu</label>
                                                        <input type="text" class="form-control" v-model="dataJadwal.time">
                                                    </div>
                                                    <div class="form-group col-6">
                                                        <label>Status</label>
                                                        <select class="form-control" v-model="dataJadwal.status">
                                                            <option>PROCESS</option>
                                                            <option>FINISH</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Lokasi</label>
                                                <textarea class="form-control" v-model="dataJadwal.location" rows="5"
                                                    placeholder="Masukkan Lokasi"></textarea>
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
        name: "createJadwal",
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
                dataJadwal: {
                    classroom_id: this.$route.params.id,

                },
                valKey: keySchool,
            };
        },
        created() {
            const keyClass = this.$route.params.id;
            localStorage.setItem('key-class', keyClass);

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
                axios.post('http://fp-pwl.test/schedules/', this.dataJadwal)
                    .then((response) => {
                        this.$router.push({
                            name: 'AdminJadwal'
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

    select.form-control {
        color: black;
    }
</style>