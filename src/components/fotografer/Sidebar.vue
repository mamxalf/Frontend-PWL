<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item nav-profile">
                <a href="#" class="nav-link">
                    <div class="mx-auto">
                        <img src="../../assets/images/logo.png">
                    </div>
                </a>
            </li>
            <div class="mt-4">
                <li class="nav-item">
                    <router-link to="/adminFg">
                        <a class="nav-link" href="#" id="dashboard">
                            <span class="menu-title">
                                <span class="menu-title">Dashboard</span>
                            </span>
                            <i class="mdi mdi-home menu-icon"></i>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/jadwalFg">
                        <a class="nav-link" href="#" id="list-sekolah">
                            <span class="menu-title">Pick Jadwal</span>
                            <i class="mdi mdi-table-large menu-icon"></i>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/inputData">
                        <a class="nav-link" href="#" id="list-jadwal">
                            <span class="menu-title">Input Data</span>
                            <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                            
                        </a>
                    </router-link>
                </li>
            </div>
        </ul>
    </nav>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: 'SidebarFg',
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
    }
</script>

<style>

</style>