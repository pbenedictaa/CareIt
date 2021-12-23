/* eslint-disable linebreak-style */
import sekolah from '../../data/daftar-sekolah.json';
// import loader from '../templates/loader';
import { createVolunteerItemTemplate } from '../templates/template-creator';

const sekolahVolunteer = {
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
        <div id="daftar-sekolah" class="daftar-sekolah col-sm-12">
        </div>
    `;
    },

    async afterRender() {
        // const ElementLoader = document.getElementById('loading');
        const bodyContent = document.querySelector('#daftar-sekolah');
        // ElementLoader.innerHTML = loader.loaderTemplate();
        bodyContent.innerHTML = '';

        try {
            const daftarSekolah = await sekolah.sekolah;
            daftarSekolah.forEach((skl) => {
                bodyContent.innerHTML += createVolunteerItemTemplate(skl);
            });
        } catch (err) {
            // ElementLoader.innerHTML = loader.OfflineTemplate();
        }
    },
};

export default sekolahVolunteer;
