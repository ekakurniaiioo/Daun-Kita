# Daun Kita

Website katalog tanaman hias untuk usaha kecil **Daun Kita**. Aplikasi ini membantu calon pembeli melihat katalog tanaman, mencari dan memfilter tanaman berdasarkan kategori, menambahkan tanaman ke keranjang, serta mengirim pesanan melalui WhatsApp.

## Fitur

### Katalog Tanaman

* Menampilkan daftar tanaman beserta foto, nama, kategori, harga, dan stok
* Pencarian tanaman berdasarkan nama secara real-time
* Filter tanaman berdasarkan kategori
* Menampilkan informasi ketika tanaman tidak ditemukan
* Menampilkan status **Stok Habis** ketika stok tanaman 0

### Keranjang

* Menambahkan tanaman ke keranjang
* Menambahkan jumlah tanaman yang sama tanpa membuat item baru
* Mengubah jumlah tanaman menggunakan tombol `+` dan `−`
* Menghapus tanaman dari keranjang
* Menghitung total harga secara otomatis
* Menampilkan jumlah item pada badge keranjang
* Menyimpan isi keranjang di `localStorage` sehingga tetap tersedia setelah halaman di-refresh

### Pemesanan WhatsApp

* Membuat pesan pesanan berdasarkan isi keranjang
* Menghitung total pesanan secara otomatis
* Membuka WhatsApp dengan pesan yang sudah terisi
* Pembeli dapat melengkapi nama dan alamat sebelum mengirim pesanan

## Tech Stack

* **React** — membangun antarmuka dan mengelola state aplikasi
* **Tailwind CSS** — styling dan responsive layout
* **daisyUI** — komponen UI
* **lucide-react** — ikon
* **localStorage** — menyimpan data keranjang di browser

## Desain

* **Poppins** — judul dan tombol
* **Inter** — teks
* Menggunakan konsep visual dengan nuansa hijau dan krem untuk menyesuaikan tema tanaman
* Responsive untuk berbagai ukuran layar

## Menjalankan Project

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```
