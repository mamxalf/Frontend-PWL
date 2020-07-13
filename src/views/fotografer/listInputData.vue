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
                                        <h4 class="card-title my-2">Daftar Kelas Sekolah</h4>
                                        <!-- <router-link to="/inputDataFoto"><span
                                                class="btn btn-primary btn-fw mx-2 my-2">Input Data</span>
                                        </router-link> -->
                                        <router-link to="/inputData"><span
                                                class="btn btn-secondary btn-fw mx-2 my-2">Back</span>
                                        </router-link>
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> No </th>
                                                    <th> Nama Murid </th>
                                                    <th> Nama File Foto </th>
                                                    <th> Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tabel-data-fotografer">
                                                <tr v-for="vd in valueData" :key="vd.schedule_id">
                                                    <td>1</td>
                                                    <td>{{ vd.name }}</td>
                                                    <td>{{ vd.file_name }}</td>
                                                    <td>
                                                        <router-link :to="{name: 'editInputData', params: { id: vd.input_id }}" class="btn btn-sm btn-warning mr-2">EDIT</router-link>
                                                        <button @click.prevent="PostDelete(vd.input_id)" class="btn btn-sm btn-danger">HAPUS</button>
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
        name: "listInputData",
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
                valueData: [],
            };
        },
        created() {
            axios.get(`http://fp-pwl.test/input/${this.$route.params.id}/inputed`).then(response => {
                this.valueData = response.data.data;
                console.log(response.data.data);

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
            PostDelete(id)
            {
                axios.delete(`http://fp-pwl.test/input/${id}`)
                    .then(response => {
                        this.valueData.splice(this.valueData.indexOf(id), 1);
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