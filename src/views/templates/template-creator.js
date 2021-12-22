const createMateriItemTemplate = (mat) => `
    <div class="container">
    <div class="materi-item">
        <div class="materi-item__header">
            <img src="${mat.pictureId}" alt="">
        </div>
        <div class="materi-item__content">
            <p>${mat.name}</p>
        </div>
    </div>
    </div>
`;
const createSekolahItemTemplate = (skl) => `
    <div class="container">
                    <div class="sekolah-item">
                        <div class="sekolah-item__header">
                            <img src="${skl.pictureId}" alt="">
                        </div>
                        <div class="sekolah-item__content">
                            <p class="sekolah-title">${skl.name}</p>
                            <p>${skl.address}</p>
                        </div>
                        <button type="button" class="btn btn-primary donasi-button" data-bs-toggle="modal" data-bs-target="#donasiModal">
                        DONASI
                        </button>
                    </div>
    </div>
<div class="modal fade" id="donasiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Donasi</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="ket-donasi">Untuk saat ini, donasi hanya bisa ditransfer via OVO, Gopay, dan DANA dengan nomor
                    <b>082112345678</b> atas nama <b>Yayasan Care It</b>.</p>
                <form class="row g-3">
                    <select class="form-select form-select-lg sm" aria-label=".form-select-lg example">
                        <option selected>Metode Donasi</option>
                        <option value="1">OVO</option>
                        <option value="2">Gopay</option>
                        <option value="3">DANA</option>
                    </select>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Rp</span>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Masukkan screenshot bukti pembayaran</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Pesan (Opsional)"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary" id="btnnmodal" data-bs-target="#modal2" data-bs-toggle="modal">Donasi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body ds-success">
                    <img class="ds-img" src="../public/images/donate-success.png" alt="">
                    <p class="ds-title">Terima kasih banyak, Kakak baik!</p>
                    <p class="ds-desc">Kami akan mengirimkan sms terkait laporan donasi ke nomor kamu, ditunggu ya.</p>
                </div>
            </div>
        </div>
</div>
        `;

const createVolunteerItemTemplate = (skl) => `
    <div class="container">
        <div class="sekolah-item">
            <div class="sekolah-item__header">
                <img src="${skl.pictureId}" alt="">
            </div>
            <div class="sekolah-item__content">
                <p class="sekolah-title">${skl.name}</p>
                <p class="sekolah-add"><span class="bi bi-geo-alt-fill"></span> ${skl.address}</p>
                <p class="sekolah-jadwal"><span class="bi bi-calendar-check"></span> ${skl.jadwal}</p>
                <div class="sekolah-desc">
                <p>${skl.description}</p>
                </div>
            </div>
            <button type="button" class="btn btn-primary daftar-vol" data-bs-toggle="modal" data-bs-target="#volunModal">Daftar Volunteer</button>
        </div>
    </div>
    <div class="modal fade" id="volunModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Daftar Volunteer</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="row g-3">
                    <div class="col-12">
                        <label for="inputNama" class="form-label">Nama Lengkap</label>
                        <input type="text" class="form-control" id="inputNama" placeholder="" required>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" required>
                    </div>
                    <div class="col-md-6">
                        <label for="inputTelp" class="form-label">No Telepon</label>
                        <input type="text" class="form-control" id="inputTelp" placeholder="081234567891" required>
                    </div>
                    <div class="col-12">
                        <label for="inputSkill" class="form-label">Materi Ajar yang dikuasai</label>
                        <input type="text" class="form-control" id="inputSkill" placeholder="Matematika Dasar, Basic English, dan Pengetahuan Umum" required>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Unggah CV Anda</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>
                    <div class="col-12">
                        <label for="inputZip" class="form-label">Sekolah Pilihan Kedua</label>
                        <input type="text" class="form-control" id="inputZip" placeholder="Sekolah Cita Luhur">
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                            <label class="form-check-label check-vol" for="invalidCheck">
                                Setuju terhadap syarat dan ketentuan menjadi volunteer CARE IT.
                            </label>
                            <div class="invalid-feedback">
                                Anda harus setuju sebelum mendaftar volunteer.
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="btn btn-primary" id="btnnmodal" data-bs-target="#volun2" data-bs-toggle="modal">Daftar Volunteer</button>
            </div>
        </div>
    </div>
    </div>
    <div class="modal fade" id="volun2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">Berkas terkirim</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ds-success">
                        <img src="../public/images/donate-success.png" alt="">
                        <p class="ds-title">Terima kasih telah mendaftar!</p>
                        <p class="ds-desc">Pengumuman untuk tahap selanjutnya akan kami kirim ke email kamu dalam 1x24 jam.</p>
                </div>
            </div>
    </div>
    `;

const createRiwayatVolunItemTemplate = (skl) => `
    `;

export {
    createMateriItemTemplate,
    createSekolahItemTemplate,
    createVolunteerItemTemplate,
    createRiwayatVolunItemTemplate,
};