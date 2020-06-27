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
                                        <h4 class="card-title my-2 text-center mb-4">Data Jadwal Sesi Foto</h4>
                                        <hr>
                                        <router-link to="/jadwalFg"><span
                                                class="btn btn-success btn-fw mx-2 my-2">Schedule Available</span>
                                        </router-link>
                                        <router-link to="/jadwalFgPicked"><span
                                                class="btn btn-danger btn-fw mx-2 my-2">Schedule Picked</span>
                                        </router-link>
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> No </th>
                                                    <th> Fotografer & Kelas</th>
                                                    <th> Lokasi </th>
                                                    <th> Tanggal & Waktu</th>
                                                    <th>  Status </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tabel-data-fotografer" v-for="dv in dataValue"
                                                :key="dv.schedule_id">
                                                <tr v-if="dv.fotografer_id != null">
                                                    <td>1</td>
                                                    <div v-for="df in dataFg" :key="df.fotografer_id">
                                                        <td v-if="dv.fotografer_id == df.fotografer_id">
                                                            {{ df.name }}
                                                        </td>
                                                    </div>
                                                    <div v-for="dc in dataClass" :key="dc.classroom_id">
                                                        <td v-if="dv.classroom_id == dc.classroom_id">
                                                            {{ dc.name }}
                                                        </td>
                                                    </div>
                                                    <td>{{ dv.location }}</td>
                                                    <td>{{ dv.date }} & {{ dv.time }}</td>
                                                    <td>{{ dv.status }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
    import Navbar from '@/components/fotografer/Navbar.vue';
    import Sidebar from '@/components/fotografer/Sidebar.vue';
    import axios from "axios";
    import $ from 'jquery';

    export default {
        name: "jadwalFg",
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
                token: "",
                dataValue: [],
                dataFg: [],
                dataClass: [],
            };
        },
        created() {
            axios.get('https://backendpwl.mammam.website/schedules/').then(response => {
                this.dataValue = response.data.data;
                axios.get('https://backendpwl.mammam.website/fotografers/').then(response => {
                    this.dataFg = response.data.data;
                    axios.get('https://backendpwl.mammam.website/classrooms/').then(response => {
                        this.dataClass = response.data.data;
                    });
                });

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
            }
        }
    };
</script>

<style scoped>
    p {
        text-align: center;
    }

    .nav-item:hover {
        background: white !important;
    }

    .nav-item a:hover,
    .nav-item a i:hover {
        background: #680d96 !important;
        color: white !important;
    }
</style>