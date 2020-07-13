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
                                        <h4 class="card-title my-4 text-center">Confirm Pick Schedule</h4>
                                        <hr>
                                        <form @submit.prevent="PostUpdate">
                                            <input type="hidden" v-model="dataValue.fotografer_id">
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="">Tanggal</label>
                                                    <input type="date" class="form-control" v-model="dataValue.date">
                                                </div>
                                                <div class="form-row col-md-6">
                                                    <div class="form-group col-6">
                                                        <label>Jam / Waktu</label>
                                                        <input type="text" class="form-control" v-model="dataValue.time">
                                                    </div>
                                                    <div class="form-group col-6">
                                                        <label>Status</label>
                                                        <select class="form-control" v-model="dataValue.status">
                                                            <option>PROCESS</option>
                                                            <option>FINISH</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Lokasi</label>
                                                <textarea class="form-control" v-model="dataValue.location" rows="5"
                                                    placeholder="Masukkan Lokasi"></textarea>
                                            </div>

                                            <button type="submit" class="btn btn-md btn-primary mr-2">Confirm</button>
                                            <router-link to="/jadwalFg"><span class="btn btn-md btn-secondary btn-fw my-2">Back</span></router-link>

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
        name: "pickJadwal",
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
                dataValue: {
                    fotografer_id: this.$route.params.fgId,
                },
            };
            
        },
        created() {
            
            console.log(this.dataValue.fotografer_id);
            
            axios.get(`http://fp-pwl.test/schedule/${this.$route.params.id}`)
                .then((response) => {
                this.dataValue = response.data.data;
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
            //     axios.post('http://fp-pwl.test/fotografers/', this.dataValue)
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
                axios.put(`http://fp-pwl.test/schedule/${this.$route.params.id}`, this.dataValue)
                    .then((response) => {
                        this.$router.push({
                            name: 'jadwalFg'
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

    select.form-control {
        color: black;
    }
</style>