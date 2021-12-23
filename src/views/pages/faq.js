const faq = {
    async render() {
        return `
        <div class="container sekolah-title">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="faq-title">FAQ</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <ul class="faq">
                        <li>
                            <div class="headerr">Bagaimana mengecek apakah donasi saya sudah diterima atau belum?</div>
                            <div class="answer">Donasi yang telah anda transfer akan kami konfirmasi ke alamat email akun anda beserta dengan file laporan alokasi donasi.</div>
                        </li>
                        <li>
                            <div class="headerr">Bagaimana jika saya tidak menerima email konfirmasi donasi?</div>
                            <div class="answer"> Email konfirmasi donasi akan dikirimkan paling lama 1x24
                            jam. Jika anda belum menerima emaill hingga waktu tersebut maka dapat menghubungi email resmi kami: care_it@gmail.com</div>
                        </li>
                        <li>
                            <div class="headerr">Bagaimana jika saya ingin mendaftar jadi volunteer?</div>
                            <div class="answer">Anda harus login terlebih dahulu menggunakan email yang telah anda daftarkan lalu akan muncul menu daftar volunteer pada dashboard website.</div>
                        </li>
                        <li>
                            <div class="headerr">Bagaimana mengecek proses pendaftaran volunteer?</div> 
                            <div class="answer">Setelah anda mengirimkan form pendaftaran, maka pendaftaran anda akan kami proses dan hasilnya akan dikirimkan melalui email akun anda untuk pemberitahuan selanjutnya. Jika dalam 1x24 jam anda tidak menerima email apapun maka anda dapat menghubungi email resmi kami: care_it@gmail.com</div>
                        </li>
                        <li><div class="headerr"></div>Jika anda memiliki pertanyaan lain, maka anda dapat menanyakannya melalui email resmi kami: care_it@gmail.com dengan subjek "Tanya Care It".</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
    },

    async afterRender() {

    },
};

export default faq;