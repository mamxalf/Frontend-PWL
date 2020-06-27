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
                                        <h4 class="card-title my-2 text-center mb-4">Input data Foto</h4>
                                        <hr>
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> No </th>
                                                    <th> Kelas</th>
                                                    <th> Lokasi </th>
                                                    <th> Tanggal & Waktu</th>
                                                    <th> Status </th>
                                                    <th> Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tabel-data-fotografer" v-for="dv in dataValue"
                                                :key="dv.schedule_id">
                                                <tr>
                                                    <td>1</td>
                                                    <span v-for="dc in dataClass" :key="dc.classroom_id">
                                                        <td v-if="dv.classroom_id == dc.classroom_id">
                                                            {{ dc.name }}
                                                        </td>
                                                    </span>
                                                    <td>{{ dv.location }}</td>
                                                    <td>{{ dv.date }} & {{ dv.time }}</td>
                                                    <td>{{ dv.status }}</td>
                                                    <td>
                                                        <router-link
                                                            :to="{name: 'listInputData', params: { id: dv.schedule_id }}"
                                                            class="btn btn-sm btn-danger mr-2">List Input Data
                                                        </router-link>
                                                        <router-link
                                                            :to="{name: 'inputDataFoto', params: { id: dv.schedule_id }}"
                                                            class="btn btn-sm btn-success mr-2">Input Data
                                                        </router-link>
                                                        <button @click.prevent="PickSchedule(dv.schedule_id, keyFg, dv.classroom_id, dv.location, dv.date, dv.time, sFinish)"
                                                            class="btn btn-sm btn-warning">FINISH</button>
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
    import Navbar from '@/components/fotografer/Navbar.vue';
    import Sidebar from '@/components/fotografer/Sidebar.vue';
    import axios from "axios";
    import $ from 'jquery';

    export default {
        name: "inputData",
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
                dataClass: [],
                sFinish: "FINISH",
                keyFg: localStorage.getItem('fg-id'),
            };
        },
        created() {
            axios.get(`https://backendpwl.mammam.website/schedule/${localStorage.getItem('fg-id')}/picked`).then(response => {
                this.dataValue = response.data.data;
                axios.get('https://backendpwl.mammam.website/classrooms/').then(response => {
                        this.dataClass = response.data.data;
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
            PickSchedule(scId, fgId, clsId, keyLocation, keyDate, keyTime, keyStatus)
            {
                axios.put(`https://backendpwl.mammam.website/schedule/${scId}`, {
                    fotografer_id: fgId,
                    classroom_id: clsId,
                    location: keyLocation,
                    date: keyDate,
                    time: keyTime,
                    status: keyStatus,
                }).then((response) => {
                        console.log(response);
                        alert('Jadwal Sudah di Selesaikan');
                        location.reload();
                        // this.dv.status = response.data.status;

                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            },
        }
    };
</script>

<style scoped>
    p {
        text-align: center;
    }
</style>