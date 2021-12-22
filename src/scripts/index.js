import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from '../views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
    burger: document.querySelector('.burger'),
    sidebar: document.querySelector('.sidebar'),
    bgSidebar: document.querySelector('.bg-sidebar'),
    content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => app.renderPage());

window.addEventListener('load', () => {
    app.renderPage();
    // swRegister();
});

// import 'regenerator-runtime'; /* for async await transpile */
// import '../styles/main.css';
// import '../styles/responsive.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import materi from '../data/materi-ajar.json';

// let mate = "";
// materi.materi.forEach((mat) => {
//     mate += `
//     <div class="container">
//     <div class="materi-item">
//         <div class="materi-item__header">
//             <img src="${mat.pictureId}" alt="">
//         </div>
//         <div class="materi-item__content">
//             <p>${mat.name}</p>
//         </div>        
//     </div>
//     </div>
//     `;
//     document.getElementById("materii").innerHTML = mate;
// });

// const burger = document.querySelector('.burger')
// const sidebar = document.querySelector('.sidebar')
// const bgSidebar = document.querySelector('.bg-sidebar')

// burger.addEventListener('click', function () {
//     this.classList.toggle('change')
//     sidebar.classList.toggle('change')
//     bgSidebar.classList.toggle('change')
// })

// bgSidebar.addEventListener('click', function () {
//     this.classList.remove('change')
//     sidebar.classList.remove('change')
//     burger.classList.remove('change')
// })