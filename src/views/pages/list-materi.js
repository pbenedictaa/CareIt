/* eslint-disable linebreak-style */
import materi from '../../data/materi-ajar.json';
// import loader from '../templates/loader';
import { createMateriItemTemplate } from '../templates/template-creator';

const ListMateri = {
    async render() {
        return `
        <div class="container materi-title">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="text-center">Materi Ajar</h2>
                        <hr>
                    </div>
                </div>
            </div>
            <div id="materii" class="materi col-sm-12"></div>
    `;
    },

    async afterRender() {
        // const ElementLoader = document.getElementById('loading');
        const bodyContent = document.querySelector('#materii');
        // ElementLoader.innerHTML = loader.loaderTemplate();
        bodyContent.innerHTML = '';

        try {
            const materis = await materi.materi;
            materis.forEach((mat) => {
                bodyContent.innerHTML += createMateriItemTemplate(mat);
            });
        } catch (err) {
            // ElementLoader.innerHTML = loader.OfflineTemplate();
        }
    },
};

export default ListMateri;
