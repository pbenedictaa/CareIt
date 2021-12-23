/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
    init({
        burger, bgSidebar, sidebar, content,
    }) {
        burger.addEventListener('click', function () {
            this.classList.toggle('change')
            sidebar.classList.toggle('change')
            bgSidebar.classList.toggle('change')
            content.classList.remove('change')
        })

        bgSidebar.addEventListener('click', function () {
            this.classList.remove('change')
            sidebar.classList.remove('change')
            burger.classList.remove('change')
            content.classList.toggle('change')
        })
    },

    // _toggleDrawer(event, sidebar) {
    //     event.stopPropagation();
    //     sidebar.classList.toggle('open');
    // },

    // _closeDrawer(event, sidebar) {
    //     event.stopPropagation();
    //     sidebar.classList.remove('open');
    // },
};

export default DrawerInitiator;
