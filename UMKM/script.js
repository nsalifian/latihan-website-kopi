alert('Selamat datang di website profil UMKM anda');

const namaUMKM = 'Kopi Nusantara';
console.log('Nama UMKM: ', namaUMKM);

let produk = 3;
console.log('Jumlah produk saat ini:', produk);
produk += 2;
console.log('Setelah penambahan', produk);


// === VALIDASI FORM  ===
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formKontak");

    const inputNama = document.getElementById("nama");
    const inputEmail = document.getElementById("email");
    const inputKategori = document.getElementById("kategori");
    const inputPesan = document.getElementById("pesan");

    const errorNama = document.getElementById("errorNama");
    const errorEmail = document.getElementById("errorEmail");
    const errorKategori = document.getElementById("errorKategori");
    const errorPesan = document.getElementById("errorPesan");

    form.addEventListener("submit", (event) => {
        let valid = true;

        // VALIDASI NAMA
        if (inputNama.value.trim() === "") {
            errorNama.textContent = "Nama wajib diisi.";
            valid = false;
        } else {
            errorNama.textContent = "";
        }

        // VALIDASI EMAIL
        const emailPattern = /^[^\s@]+@gmail\.com$/i;
        if (!emailPattern.test(inputEmail.value.trim())) {
            errorEmail.textContent = "Email harus @gmail.com dengan format yang benar.";
            valid = false;
        } else {
            errorEmail.textContent = "";
        }

        // VALIDASI KATEGORI
        if (inputKategori.value === "") {
            errorKategori.textContent = "Pilih salah satu kategori.";
            valid = false;
        } else {
            errorKategori.textContent = "";
        }

        // VALIDASI PESAN
        if (inputPesan.value.trim().length < 10) {
            errorPesan.textContent = "Pesan minimal 10 karakter.";
            valid = false;
        } else {
            errorPesan.textContent = "";
        }

        // Jika tidak valid, cegah submit
        if (!valid) {
            event.preventDefault();
            return;
        }

        // Jika valid
        alert("Pesan berhasil dikirim!");
        form.reset();
    });

    // Event blur untuk nama
    inputNama.addEventListener("blur", () => {
        if (inputNama.value.trim() === "") {
            errorNama.textContent = "Nama wajib diisi.";
        } else {
            errorNama.textContent = "";
        }
    });

    // Event input realtime untuk pesan
    inputPesan.addEventListener("input", () => {
        if (inputPesan.value.trim().length < 10) {
            errorPesan.textContent = "Pesan minimal 10 karakter.";
        } else {
            errorPesan.textContent = "";
        }
    });
});
