import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({
        burger, bgSidebar, sidebar,
        content,
    }) {
        this._burger = burger;
        this._bgSidebar = bgSidebar;
        this._sidebar = sidebar;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            burger: this._burger,
            bgSidebar: this._bgSidebar,
            sidebar: this._sidebar,
            content: this._content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;