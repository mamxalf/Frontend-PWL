import Vue from 'vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue';
import Login from '../views/Login.vue';
import LoginFotografer from '../views/LoginFotografer.vue';
import AdminFotografer from '../views/AdminFotografer.vue';
import AdminSekolah from '../views/AdminSekolah.vue';
import AdminKelas from '../views/AdminKelas.vue';
import AdminJadwal from '../views/AdminJadwal.vue';
import createFotografer from '../views/partials/createFotografer.vue';
import createSekolah from '../views/partials/createSekolah.vue';
import createKelas from '../views/partials/createKelas.vue';
import createJadwal from '../views/partials/createJadwal.vue';
import editFotografer from '../views/partials/editFotografer.vue';
import editSekolah from '../views/partials/editSekolah.vue';
import editKelas from '../views/partials/editKelas.vue';
import editJadwal from '../views/partials/editJadwal.vue';
import AdminFg from '../views/fotografer/Admin.vue';
import JadwalFg from '../views/fotografer/jadwalFg.vue';
import jadwalFgPicked from '../views/fotografer/jadwalFgPicked.vue';
import pickJadwal from '../views/fotografer/pickJadwal.vue';
import inputData from '../views/fotografer/inputData.vue';
import inputDataFoto from '../views/fotografer/inputDataFoto.vue';
import listInputData from '../views/fotografer/listInputData.vue';
import editInputData from '../views/fotografer/editInputData.vue';
import listInputDataAdmin from '../views/partials/listInputDataAdmin.vue';

Vue.use(VueRouter)
Vue.use(axios)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginFotografer',
    name: 'LoginFotografer',
    component: LoginFotografer
  },
  {
    path: '/fotografer',
    name: 'AdminFotografer',
    component: AdminFotografer
  },
  {
    path: '/sekolah',
    name: 'AdminSekolah',
    component: AdminSekolah
  },
  {
    path: '/kelas',
    name: 'AdminKelas',
    component: AdminKelas
  },
  {
    path: '/jadwal',
    name: 'AdminJadwal',
    component: AdminJadwal
  },
  {
    path: '/createFotografer',
    name: 'createFotografer',
    component: createFotografer
  },
  {
    path: '/createSekolah',
    name: 'createSekolah',
    component: createSekolah
  },
  {
    path: '/createKelas',
    name: 'createKelas',
    component: createKelas
  },
  {
    path: '/createJadwal',
    name: 'createJadwal',
    component: createJadwal
  },
  {
    path: '/editFotografer',
    name: 'editFotografer',
    component: editFotografer
  },
  {
    path: '/editSekolah',
    name: 'editSekolah',
    component: editSekolah
  },
  {
    path: '/editKelas',
    name: 'editKelas',
    component: editKelas
  },
  {
    path: '/editJadwal',
    name: 'editJadwal',
    component: editJadwal
  },
  {
    path: '/AdminFg',
    name: 'AdminFg',
    component: AdminFg
  },
  {
    path: '/jadwalFg',
    name: 'jadwalFg',
    component: JadwalFg
  },
  {
    path: '/jadwalFgPicked',
    name: 'jadwalFgPicked',
    component: jadwalFgPicked
  },
  {
    path: '/pickJadwal',
    name: 'pickJadwal',
    component: pickJadwal
  },
  {
    path: '/inputData',
    name: 'inputData',
    component: inputData
  },
  {
    path: '/inputDataFoto',
    name: 'inputDataFoto',
    component: inputDataFoto
  },
  {
    path: '/listInputData',
    name: 'listInputData',
    component: listInputData
  },
  {
    path: '/editInputData',
    name: 'editInputData',
    component: editInputData
  },
  {
    path: '/listInputDataAdmin',
    name: 'listInputDataAdmin',
    component: listInputDataAdmin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
