import Home from "../views/pages/home";
import ListMateri from "../views/pages/list-materi";
import Login from "../views/pages/login";
import ListSekolah from "../views/pages/list-sekolah";
import Akun from "../views/pages/akun";
import sekolahVolunteer from "../views/pages/sekolah-volunteer";
import riwayat from "../views/pages/riwayat";
import faq from "../views/pages/faq";

const routes = {
    '/': Home,
    '/materi-ajar': ListMateri,
    '/login': Login,
    '/donasi': ListSekolah,
    '/akun': Akun,
    '/daftar-volunteer': sekolahVolunteer,
    '/riwayat': riwayat,
    '/faq': faq,
};

export default routes;