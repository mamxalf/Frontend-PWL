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
                                        <h4 class="card-title my-2">Data Fotografer Hypesthetic Creative</h4>
                                        <router-link to="/createFotografer"><span
                                                class="btn btn-primary btn-fw my-2">Tambah Fotografer</span>
                                        </router-link>
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th> No </th>
                                                    <th> Nama </th>
                                                    <th> Kontak </th>
                                                    <th> Actions </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tabel-data-fotografer">
                                                <tr v-for="dFg in dataFg" :key="dFg.fotografer_id">
                                                    <td>nomor</td>
                                                    <td>{{ dFg.name }}</td>
                                                    <td>{{ dFg.kontak }}</td>
                                                    <td>
                                                        <router-link :to="{name: 'editFotografer', params: { id: dFg.fotografer_id }}" class="btn btn-sm btn-warning mr-2">EDIT / DETAIL</router-link>
                                                        <button @click.prevent="PostDelete(dFg.fotografer_id)" class="btn btn-sm btn-danger">HAPUS</button>
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
        name: "AdminFotografer",
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
                dataFg: [],
            };
        },
        created() {
            axios.get('http://fp-pwl.test/fotografers/').then(response => {
                this.dataFg = response.data.data;
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
                axios.delete(`http://fp-pwl.test/fotografer/${id}`)
                    .then(response => {
                        this.dataFg.splice(this.dataFg.indexOf(id), 1);
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