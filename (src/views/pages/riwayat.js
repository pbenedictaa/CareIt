/* eslint-disable linebreak-style */
// import loader from '../templates/loader';
// import { createSekolahItemTemplate } from '../templates/template-creator';

const riwayat = {
    async render() {
        return `
        <div class="container sekolah-title">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="text-center">Riwayat Volunteer</h2>
                        <hr>
                    </div>
                </div>
        </div>
        <div class="container riwayat">
            <img class="riwayat-img" src="../public/images/folder.png" alt="">
            <h2>Kamu belum pernah mendaftar jadi volunteer nih,<br>mari <a href="#/daftar-volunteer">daftar volunteer</a> sekarang.</h2>
        </div>
    `;
    },

    async afterRender() {
        // const bodyContent = document.querySelector('#daftar-sekolah');
        // bodyContent.innerHTML = '';

        // try {
        //     const daftarSekolah = await sekolah.sekolah;
        //     daftarSekolah.forEach((skl) => {
        //         bodyContent.innerHTML += createSekolahItemTemplate(skl);
        //     });
        // } catch (err) {
        //     // ElementLoader.innerHTML = loader.OfflineTemplate();
        // }
    },
};

export default riwayat;
