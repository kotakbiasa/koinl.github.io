# Instruksi `AGENTS.md` untuk `C:\Users\Muhammad Nur Fauzan\koinl.github.io`

## Keterampilan
Keterampilan adalah sekumpulan instruksi lokal yang disimpan dalam berkas `SKILL.md`. Di bawah ini adalah daftar keterampilan yang dapat digunakan. Setiap entri mencakup nama, deskripsi, dan jalur berkas agar sumbernya dapat dibuka untuk melihat instruksi lengkap saat menggunakan keterampilan tertentu.

### Keterampilan yang tersedia
- `skill-creator`: Panduan untuk membuat keterampilan yang efektif. Keterampilan ini harus digunakan ketika pengguna ingin membuat keterampilan baru, atau memperbarui keterampilan yang sudah ada, yang memperluas kemampuan Codex dengan pengetahuan khusus, alur kerja, atau integrasi alat. (berkas: `C:/Users/Muhammad Nur Fauzan/.codex/skills/.system/skill-creator/SKILL.md`)
- `skill-installer`: Memasang keterampilan Codex ke `$CODEX_HOME/skills` dari daftar terkurasi atau jalur repositori GitHub. Gunakan ketika pengguna meminta daftar keterampilan yang dapat dipasang, memasang keterampilan terkurasi, atau memasang keterampilan dari repositori lain, termasuk repositori privat. (berkas: `C:/Users/Muhammad Nur Fauzan/.codex/skills/.system/skill-installer/SKILL.md`)
- `slides`: Membuat, mengedit, merender, mengimpor, dan mengekspor dek presentasi dengan antarmuka JavaScript `@oai/artifact-tool` yang sudah dimuat sebelumnya melalui alat artefak. (berkas: `C:/Users/Muhammad Nur Fauzan/.codex/skills/.system/slides/SKILL.md`)
- `spreadsheets`: Membuat, mengedit, menghitung ulang, mengimpor, dan mengekspor buku kerja lembar kerja dengan antarmuka JavaScript `@oai/artifact-tool` yang sudah dimuat sebelumnya melalui alat artefak. (berkas: `C:/Users/Muhammad Nur Fauzan/.codex/skills/.system/spreadsheets/SKILL.md`)

### Cara menggunakan keterampilan
- Penemuan: Daftar di atas adalah keterampilan yang tersedia dalam sesi ini, beserta nama, deskripsi, dan jalur berkas. Isi keterampilan berada di disk pada jalur yang tercantum.
- Aturan pemicu: Jika pengguna menyebut nama keterampilan, baik dengan `$NamaKeterampilan` maupun teks biasa, ATAU tugasnya jelas sesuai dengan deskripsi keterampilan yang ditampilkan di atas, maka kamu harus menggunakan keterampilan tersebut pada giliran itu. Jika beberapa keterampilan disebut, gunakan semuanya. Jangan membawa keterampilan ke giliran berikutnya kecuali disebut lagi.
- Tidak tersedia/terhalang: Jika keterampilan yang disebut tidak ada dalam daftar atau jalurnya tidak bisa dibaca, sampaikan secara singkat lalu lanjutkan dengan pendekatan cadangan terbaik.
- Cara menggunakan keterampilan secara bertahap:
  1. Setelah memutuskan untuk menggunakan keterampilan, buka `SKILL.md`-nya. Baca secukupnya untuk mengikuti alur kerjanya.
  2. Jika `SKILL.md` merujuk ke jalur relatif, misalnya `scripts/foo.py`, selesaikan jalur tersebut relatif terhadap direktori keterampilan yang tercantum di atas terlebih dahulu, dan hanya pertimbangkan jalur lain jika diperlukan.
  3. Jika `SKILL.md` menunjuk ke folder tambahan seperti `references/`, muat hanya berkas tertentu yang dibutuhkan untuk permintaan tersebut. Jangan memuat semuanya sekaligus.
  4. Jika ada `scripts/`, utamakan menjalankan atau memodifikasi skrip tersebut daripada menulis ulang blok kode besar.
  5. Jika ada `assets/` atau templat, gunakan kembali yang sudah ada daripada membuat ulang dari nol.
- Koordinasi dan urutan:
  - Jika beberapa keterampilan berlaku, pilih kumpulan paling sedikit yang sudah cukup untuk menangani permintaan, lalu sebutkan urutan penggunaannya.
  - Sampaikan keterampilan yang kamu gunakan dan alasannya dalam satu baris singkat. Jika ada keterampilan yang tampak relevan tetapi tidak digunakan, jelaskan alasannya.
- Kebersihan konteks:
  - Jaga konteks tetap ringkas. Rangkum bagian yang panjang daripada menempelkannya mentah-mentah, dan muat berkas tambahan hanya jika diperlukan.
  - Hindari penelusuran referensi yang terlalu dalam. Utamakan membuka hanya berkas yang ditautkan langsung dari `SKILL.md`, kecuali benar-benar buntu.
  - Jika ada beberapa varian, seperti kerangka kerja, penyedia, atau ranah, pilih hanya berkas referensi yang relevan dan sebutkan pilihan itu.
- Keamanan dan cadangan: Jika sebuah keterampilan tidak bisa diterapkan dengan mulus, misalnya karena berkas hilang atau instruksi tidak jelas, jelaskan masalahnya, pilih pendekatan terbaik berikutnya, lalu lanjutkan.

## Konteks lingkungan
- Direktori kerja (`cwd`): `C:\Users\Muhammad Nur Fauzan\koinl.github.io`
- Cangkang perintah (`shell`): `powershell`
- Tanggal saat ini (`current_date`): `2026-03-10`
- Zona waktu (`timezone`): `Asia/Makassar`
