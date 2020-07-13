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
                                        <h4 class="card-title my-2">Data Client Sekolah</h4>
                                        <router-link to="/createSekolah"><span
                                                class="btn btn-primary btn-fw my-2">Tambah Sekolah</span>
                                        </router-link>
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> No </th>
                                                    <th> Nama Sekolah </th>
                                                    <th> Jumlah Kelas </th>
                                                    <th> Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tabel-data-fotografer">
                                                <tr v-for="ds in dataSekolah" :key="ds.school_id">
                                                    <td>nomor</td>
                                                    <td>{{ ds.name }}</td>
                                                    <td>{{ ds.total_classrooms }}</td>
                                                    <td>
                                                        <router-link :to="{name: 'AdminKelas', params: { id: ds.school_id }}" class="btn btn-sm btn-success mr-2">DETAIL KELAS</router-link>
                                                        <router-link :to="{name: 'editSekolah', params: { id: ds.school_id }}" class="btn btn-sm btn-warning mr-2">EDIT</router-link>
                                                        <button @click.prevent="PostDelete(ds.school_id)" class="btn btn-sm btn-danger">HAPUS</button>
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
        name: "AdminSekolah",
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
                dataSekolah: [],
            };
        },
        created() {
            axios.get('http://fp-pwl.test/schools/').then(response => {
                this.dataSekolah = response.data.data;
                console.log(response.data.data);

            });

            localStorage.removeItem('key-school');
            localStorage.removeItem('key-class');

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
            PostDelete(id)
            {
                axios.delete(`http://fp-pwl.test/school/${id}`)
                    .then(response => {
                        this.dataSekolah.splice(this.dataSekolah.indexOf(id), 1);
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