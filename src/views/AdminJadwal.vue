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
                                        <!-- <router-link to="/createJadwal"><span
                                                class="btn btn-primary btn-fw my-2">Tambah Jadwal</span>
                                        </router-link> -->
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> No </th>
                                                    <th> Fotografer & Kelas</th>
                                                    <th> Lokasi </th>
                                                    <th> Tanggal & Waktu</th>
                                                    <th>  Status </th>
                                                    <th> Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tabel-data-fotografer">
                                                <tr v-for="dv in dataValue" :key="dv.schedule_id">
                                                    <td>nomor</td>
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
                                                    <td>
                                                        <router-link
                                                            :to="{name: 'listInputDataAdmin', params: { id: dv.schedule_id }}"
                                                            class="btn btn-sm btn-success mr-2">List Input Data
                                                        </router-link>
                                                        <router-link
                                                            :to="{name: 'editJadwal', params: { id: dv.schedule_id }}"
                                                            class="btn btn-sm btn-warning mr-2">EDIT / DETAIL
                                                        </router-link>
                                                        <button @click.prevent="PostDelete(dv.schedule_id)"
                                                            class="btn btn-sm btn-danger">HAPUS</button>
                                                    </td>
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
    import Navbar from '@/components/Navbar.vue';
    import Sidebar from '@/components/Sidebar.vue';
    import axios from "axios";
    import $ from 'jquery';

    export default {
        name: "AdminJadwal",
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
            },
            PostDelete(id) {
                axios.delete(`https://backendpwl.mammam.website/schedule/${id}`)
                    .then(response => {
                        this.dataValue.splice(this.dataValue.indexOf(id), 1);
                        console.log(response);
                    }).catch(error => {
                        console.log(error.response);
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