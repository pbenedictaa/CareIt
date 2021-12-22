import Home from "../views/pages/home";
import ListMateri from "../views/pages/list-materi";
import Login from "../views/pages/login";
import ListSekolah from "../views/pages/list-sekolah";
import Akun from "../views/pages/akun";
import sekolahVolunteer from "../views/pages/sekolah-volunteer";
import detailVolun from "../views/pages/detail-volun";
import riwayat from "../views/pages/riwayat";

const routes = {
    '/': Home,
    '/materi-ajar': ListMateri,
    '/login': Login,
    '/donasi': ListSekolah,
    '/akun': Akun,
    '/daftar-volunteer': sekolahVolunteer,
    '/detail-volun': detailVolun,
    '/riwayat': riwayat,
};

export default routes;