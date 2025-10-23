![logo wikidotexe](https://github.com/user-attachments/assets/da82fc30-1dbe-48bf-b57c-033dec2ceb9d)

# 🚀 Portfolio-modern V2

[![GitHub Stars](https://img.shields.io/github/stars/wikidotexe/Portfolio-modern?style=social)](https://github.com/wikidotexe/Portfolio-modern/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/wikidotexe/Portfolio-modern?style=social)](https://github.com/wikidotexe/Portfolio-modern/network)

Ini adalah proyek **Next.js** yang dirancang untuk menampilkan
portofolio dengan **desain modern**, **responsif**, dan **interaktif**.
Versi ini hadir dengan tambahan fitur **Dark Mode** dan dukungan
**deployment menggunakan Docker dan Vercel** --- biar makin fleksibel
dan kekinian 😎

> **Status Proyek**: 🧠 Aktif Dikembangkan

---

## 🔍 **Fitur Utama**

- 🎨 **Desain Modern & Clean** Dibangun dengan **Next.js** dan UI yang
  memukau untuk pengalaman pengguna terbaik.

- 🌗 **Dark Mode Otomatis / Manual** Mode gelap dengan toggle
  interaktif yang tersimpan di preferensi pengguna (localStorage).

- 📱 **Responsif di Semua Device** Desain adaptif untuk desktop,
  tablet, dan smartphone.

- ⚡ **Performa Tinggi** Optimasi built-in dari Next.js menjamin
  kecepatan dan efisiensi maksimal.

- 🧩 **Komponen Modular** Semua elemen UI reusable & terstruktur rapi
  di folder `components/`.

- 🐳 **Hosting via Docker** Jalankan dengan mudah di container
  menggunakan **Dockerfile** dan **docker-compose.yml**.

- ☁️ **Deploy ke Vercel** Integrasi seamless untuk build otomatis dan
  hosting gratis dengan performa optimal.

- 🌐 **Tipografi Elegan** Menggunakan font
  [Geist](https://vercel.com/font) dari Vercel untuk tampilan teks
  yang bersih dan modern.

---

## 📂 **Struktur Proyek**

    Portfolio-modern/
    ├── app/
    ├── components/
    ├── lib/
    ├── styles/
    ├── public/
    ├── .env.local
    ├── .gitignore
    ├── docker-compose.yml
    ├── Dockerfile
    ├── next.config.js
    ├── package.json
    └── README.md

---

## ⚙️ **Instalasi & Penggunaan**

### 1️⃣ Clone Repository

```bash
git clone https://github.com/wikidotexe/portfolio-update
cd Portfolio-modern
```

### 2️⃣ Install Dependencies

Pastikan sudah terinstal [Node.js](https://nodejs.org/) dan
[npm](https://www.npmjs.com/).

```bash
npm install
```

### 3️⃣ Setup Environment

Buat file `.env.local` sesuai kebutuhan (misal API_URL, SITE_NAME, dsb).

### 4️⃣ Jalankan Development Server

```bash
npm run dev
```

Buka di browser:\
👉 `http://localhost:3000`

---

## 🐳 **Menjalankan via Docker**

1.  **Build Image**

    ```bash
    docker build -t portfolio-modern .
    ```

2.  **Jalankan Container**

    ```bash
    docker run -d -p 3000:3000 portfolio-modern
    ```

3.  **Atau Gunakan docker-compose**

    ```bash
    docker-compose up -d
    ```

Akses di browser:\
👉 `http://localhost:3000`

---

## ☁️ **Deploy ke Vercel**

1.  Push kode ke repository GitHub.\
2.  Buka [Vercel Dashboard](https://vercel.com/).\
3.  Hubungkan repository Anda dan klik **Deploy**.\
4.  Vercel akan otomatis build & deploy proyek Next.js Anda.

> 💡 **Pro Tip:** Vercel akan otomatis mendeteksi file `next.config.js`
> untuk pengaturan build.

---

## 🧑‍💻 **Kontribusi**

1.  Fork repositori ini\

2.  Buat branch fitur baru

    ```bash
    git checkout -b fitur-keren
    ```

3.  Commit perubahan

    ```bash
    git commit -m "Menambahkan fitur keren"
    ```

4.  Push dan buat Pull Request di GitHub

---

## 💡 **Catatan Tambahan**

- Dark Mode menggunakan kombinasi **CSS Variables** & **Next.js state
  management**.\
- Container Docker sudah dikonfigurasi untuk **production-ready
  build**.\
- Support untuk **Next.js 14** (App Router + Server Components).

---

## 🌟 **Terima Kasih**

Terima kasih udah mampir ke repo ini!\
Kalau menurut kamu keren, jangan lupa kasih ⭐ dan share ke teman-teman
developer lainnya 🙌

Happy coding & stay creative 💻✨
