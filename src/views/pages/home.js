const Home = {
    async render() {
        return `
        <div class="jumbotron text-left">
            <p>Selamat datang di Care It, Kakak Baik!<br>
                Mari <a href="#/donasi">berdonasi</a> atau <a href="#/login">menjadi volunteer</a> untuk membantu adik-adik kita yang kurang
                beruntung</p>
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
                    <h2 class="text-center">Tentang Kami</h2>
                    <hr>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 text-justify">
                    <p>Care It adalah sebuah aplikasi yang berfungsi untuk menjembatani antara donatur dan
                    volunteer dalam membantu sekolah jalanan dan/atau anak kurang mampu mendapatkan
                    bantuan pendidikan. Hadirnya Care It dilatarbelakangi karena saat ini banyak sekali anak-anak
                    kurang mampu tidak bersekolah karena terkendala biaya.</p>
                </div>
                <div class="col-sm-6 text-justify">
                    <p>Kemudian, banyak  sekolah jalanan
                    yang tidak tersorot publik ataupun minim informasi yang didapatkan publik yang mengakibatkan
                    sekolah anak jalanan kesulitan dalam hal dana dan pengajaran SDM. Sehingga yang menjadi
                    target dalam aplikasi berbasis website ini adalah seluruh masyarakat yang ingin berdonasi
                    dan/atau ingin menjadi volunteer dan seluruh sekolah jalanan yang tidak terpublikasi.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 text-justify">
                    <div class="aboutt">
                    <img src="../public/images/teach.png" class="about-img" alt="">
                    </div>
                    <p class="about-title">Teaching</p>
                    <p class="about-desc">Pendidikan merupakan hak setiap anak. Kamu dapat mengajarkan mereka melalui komunitas yang telah terdaftar dalam
                    Aplikasi Care It dengan menjadi Volunteer.</p>
                </div>
                <div class="col-sm-4 text-justify">
                    <div class="aboutt">
                    <img src="../public/images/care.png" class="about-img" alt="">
                    </div>
                    <p class="about-title">Caring</p>
                    <p class="about-desc">Kamu dapat berdonasi untuk komunitas yang terdaftar melalui Aplikasi Care It. Dengan berdonasi, kamu telah membantu dalam
                    pengembangan komunitas belajar anak-anak kurang mampu.</p>
                </div>
                <div class="col-sm-4 text-justify">
                    <div class="aboutt">
                    <img src="../public/images/share.png" class="about-img" alt="">
                    </div>
                    <p class="about-title">Sharing</p>
                    <p class="about-desc">Dengan menjadi volunteer, kamu dapat membantu sekolah jalanan mendapatkan mentor sehingga dapat berbagi ilmu. Kamu juga dapat membantu menyebarkan informasi kepada teman-temanmu loh agar mereka dapat mengetahui Aplikasi Care It.</p>
                </div>
            </div>
        </div>
    </section>
    `;
    },

    async afterRender() {
        
    },
};

export default Home;