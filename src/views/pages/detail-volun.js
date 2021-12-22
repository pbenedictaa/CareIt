/* eslint-disable linebreak-style */
import sekolah from '../../data/daftar-sekolah.json';
import UrlParser from '../../routes/url-parser';
// import loader from '../templates/loader';
// import { createDetailVolunItemTemplate } from '../templates/template-creator';

const detailVolun = {
    async render() {
        return `
        <div class="container sekolah-title">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="text-center">Syarat dan Ketentuan Menjadi Volunteer</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <ol class="syarat">
                        <li>Pendidikan minimal SMA sederajat</li>
                        <li>Berusia 18-35 tahun</li>
                        <li>Dapat meluangkan waktu sesuai dengan jadwal sekolah yang dipilih</li>
                        <li>Berkomitmen tinggi</li>
                        <li>Menyukai kegiatan belajar mengajar</li>
                        <li>Memahami materi ajar yang diberikan</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="container sekolah-title">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="text-center">Daftar Sekolah</h2>
                    <hr>
                </div>
            </div>
        </div>
        <div id="detail-volun" class="detail-volun col-sm-12">
        </div>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const sekolahh = await sekolah.sekolah;
        const volunteerContainer = document.querySelector('#detail-volun');
        volunteerContainer.innerHTML += createDetailVolunItemTemplate(sekolahh);
        
    },
};

export default detailVolun;
