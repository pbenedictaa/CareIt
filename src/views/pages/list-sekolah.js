/* eslint-disable linebreak-style */
import sekolah from '../../data/daftar-sekolah.json';
// import loader from '../templates/loader';
import { createSekolahItemTemplate } from '../templates/template-creator';

const ListSekolah = {
    async render() {
        return `
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
                bodyContent.innerHTML += createSekolahItemTemplate(skl);
            });
        } catch (err) {
            // ElementLoader.innerHTML = loader.OfflineTemplate();
        }
        // const logout = document.getElementById("btn-modal");
        // logout.addEventListener("click", (e) => {
        //     e.preventDefault();
        // });
    },
};

export default ListSekolah;
