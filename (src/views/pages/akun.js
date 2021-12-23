const Akun = {
    async render() {
        return `
        <div class="jumbotron text-left">
            <p>Selamat datang kembali di Care It!<br>
                Mari <a href="#">berdonasi</a> atau <a href="#/daftar-volunteer">menjadi volunteer</a> untuk membantu adik-adik kita yang kurang
                beruntung.</p>
            <div class="headline text-center">
                <img src="../public/images/jumbotron.png" alt="">
                <h1>CARE IT</h1>
                <p>"Teach, Care, and Share"</p>
            </div>
        </div>
    <section class="about" id="about">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="text-center">Kegiatanku</h2>
                    <hr>
                </div>
            </div>
        </div>
        <div class="container akun-grid">
            <div class="row">
                <div class="col-sm-6 text-justify">
                    <div class="akun">
                    <img src="../public/images/lecture.png" class="akun-img" alt="">
                    </div>
                    <p class="akun-title"><a href="#/daftar-volunteer">Daftar Volunteer</a></p>
                </div>
                <div class="col-sm-6 text-justify">
                    <div class="akun">
                        <img src="../public/images/work-history.png" class="akun-img" alt="">
                    </div>
                    <p class="akun-title"><a href="#/riwayat">Riwayat Volunteer</a></p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 text-justify">
                    <div class="akun">
                    <img src="../public/images/donate.png" class="akun-img" alt="">
                    </div>
                    <p class="akun-title"><a href="#/donasi">Donasi</a></p>
                </div>
                <div class="col-sm-6 text-justify">
                    <div class="akun">
                        <img src="../public/images/creative-teaching.png" class="akun-img" alt="">
                    </div>
                    <p class="akun-title"><a href="#/materi-ajar">Materi Ajar</a></p>
                </div>
            </div>
        </div>
    </section>
    `;
    },

    async afterRender() {

    },
};

export default Akun;