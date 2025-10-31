# Dokumentasi Website Rumah Qur'an Al-Insan

## 📋 Daftar Isi
1. [Struktur Proyek](#struktur-proyek)
2. [Penjelasan File](#penjelasan-file)
3. [Komponen Website](#komponen-website)
4. [Cara Mengubah Konten](#cara-mengubah-konten)
5. [Warna dan Desain](#warna-dan-desain)
6. [Tips Pengembangan](#tips-pengembangan)

---

## 🗂️ Struktur Proyek

```
project/
├── src/
│   ├── components/          # Folder komponen website
│   │   ├── Navbar.tsx       # Menu navigasi atas
│   │   ├── Hero.tsx         # Bagian pembuka/hero
│   │   ├── Problem.tsx      # Bagian masalah yang dihadapi
│   │   ├── ValueProposition.tsx  # Keunggulan program
│   │   ├── HowItWorks.tsx   # Cara kerja/langkah-langkah
│   │   ├── Testimonials.tsx # Testimoni santri
│   │   ├── Pricing.tsx      # Paket harga program
│   │   ├── FAQ.tsx          # Pertanyaan yang sering diajukan
│   │   ├── Teachers.tsx     # Profil guru-guru
│   │   ├── FinalCTA.tsx     # Ajakan akhir untuk daftar
│   │   └── Footer.tsx       # Bagian bawah website
│   ├── App.tsx              # File utama yang menggabungkan semua komponen
│   ├── main.tsx             # Entry point aplikasi
│   └── index.css            # Style global dan animasi
├── package.json             # Daftar dependencies dan scripts
└── README.md                # File ini
```

---

## 📄 Penjelasan File

### **1. App.tsx**
File utama yang mengatur urutan tampilan semua komponen di website.

**Isi:**
```typescript
- Import semua komponen
- Menyusun komponen dari atas ke bawah:
  Navbar → Hero → Problem → ValueProposition → HowItWorks
  → Testimonials → Pricing → FAQ → Teachers → FinalCTA → Footer
```

**Cara Mengubah Urutan:**
Pindahkan baris komponen untuk mengubah urutan tampilan.

---

### **2. components/Navbar.tsx**
Menu navigasi yang muncul di bagian atas website (fixed/tetap).

**Isi:**
- Logo Rumah Qur'an Al-Insan (icon BookOpen)
- Menu: Program, Testimoni, Guru, Kontak
- Tombol "Daftar" yang mengarah ke WhatsApp

**Cara Mengubah:**
```typescript
// Ganti nama menu
<a href="#program">Program Baru</a>

// Ganti nomor WhatsApp
href="https://wa.me/6289808097333"  // Ganti angka ini

// Ganti warna tombol Daftar
className="bg-[#F4A261]"  // Ganti kode warna ini
```

---

### **3. components/Hero.tsx**
Bagian pembuka website dengan judul besar dan tombol CTA.

**Isi:**
- Logo besar di tengah
- Judul: "Bersama Al-Qur'an, Kita Bangun Generasi Qur'ani"
- Subtitle: "Belajar mudah, nyaman, dan sesuai sunnah"
- 2 tombol: "Daftar Sekarang" dan "Hubungi Kami"
- Background: Gradient biru dengan pattern islami

**Cara Mengubah:**
```typescript
// Ganti judul
<h1>Judul Baru Anda</h1>

// Ganti subtitle
<p>Subtitle baru Anda</p>

// Ganti link tombol
href="https://wa.me/6289808097333"  // Ganti nomor WA

// Ganti warna background
className="bg-gradient-to-br from-[#0A2647] to-[#144272]"
```

---

### **4. components/Problem.tsx**
Menjelaskan masalah yang dihadapi calon santri.

**Isi:**
- Gambar/ilustrasi di kiri
- 3 masalah utama dengan icon:
  1. Bingung mulai dari mana
  2. Belum menemukan guru yang sabar
  3. Jadwal sibuk dan sulit ikut kelas reguler

**Cara Mengubah:**
```typescript
// Tambah masalah baru
const problems = [
  {
    icon: AlertCircle,
    text: "Masalah baru Anda"
  },
  // ... tambahkan lebih banyak
];

// Ganti teks masalah
text: "Teks masalah yang baru"
```

---

### **5. components/ValueProposition.tsx**
Menampilkan 4 keunggulan program.

**Isi:**
- Metode USMANI Teruji
- Guru Bersanad & Berpengalaman
- Jadwal Fleksibel
- Garansi Bisa Membaca Al-Qur'an

**Cara Mengubah:**
```typescript
// Edit keunggulan
const values = [
  {
    icon: Award,
    title: "Judul Keunggulan",
    description: "Deskripsi keunggulan"
  },
  // ... edit atau tambah lebih banyak
];
```

---

### **6. components/HowItWorks.tsx**
Timeline 4 langkah cara memulai.

**Isi:**
1. Pilih Program
2. Tentukan Jadwal
3. Mulai Belajar
4. Dapatkan Sertifikat

**Cara Mengubah:**
```typescript
// Edit atau tambah langkah
const steps = [
  {
    icon: ListChecks,
    title: "Langkah 1",
    description: "Deskripsi langkah 1"
  },
  // ... edit atau tambah langkah baru
];
```

---

### **7. components/Testimonials.tsx**
Carousel testimoni yang berputar otomatis.

**Isi:**
- 4 testimoni dari santri dan orang tua
- Auto-rotate setiap 5 detik
- Rating bintang 5
- Tombol prev/next untuk navigasi manual

**Cara Mengubah:**
```typescript
// Tambah testimoni baru
const testimonials = [
  {
    name: "Nama Santri",
    role: "Role/Status",
    text: "Isi testimoni...",
    rating: 5
  },
  // ... tambah lebih banyak
];

// Ubah kecepatan rotasi (dalam milidetik)
setInterval(nextSlide, 5000);  // 5000 = 5 detik
```

---

### **8. components/Pricing.tsx**
Menampilkan 3 paket harga.

**Isi:**
- **Reguler**: Rp50.000/bulan
- **Privat**: Rp75.000/bulan (paling populer)
- **Tahfidz**: Rp100.000/bulan

Setiap paket punya daftar fitur dengan checkbox.

**Cara Mengubah:**
```typescript
// Edit harga
const plans = [
  {
    name: "Reguler",
    price: "50.000",  // Ganti harga di sini (tanpa "Rp")
    features: [
      "Fitur 1",
      "Fitur 2",
      // ... edit atau tambah fitur
    ],
    popular: false  // Set true untuk badge "Paling Populer"
  },
];

// Tambah paket baru (copy salah satu objek dan edit)
```

---

### **9. components/FAQ.tsx**
Accordion pertanyaan dan jawaban.

**Isi:**
- 6 pertanyaan umum
- Klik untuk membuka/tutup jawaban
- Animasi smooth

**Cara Mengubah:**
```typescript
// Edit atau tambah FAQ
const faqs = [
  {
    question: "Pertanyaan Anda?",
    answer: "Jawaban lengkap di sini..."
  },
  // ... tambah pertanyaan baru
];
```

---

### **10. components/Teachers.tsx**
Carousel profil guru dengan infinite loop (11 guru).

**Isi:**
- Nama ustadz/ustadzah
- Foto guru (dari Pexels atau URL)
- Pendidikan (S1, S2, LIPIA, dll)
- Hafalan (berapa juz)
- Pencapaian/prestasi
- Auto-scroll carousel dengan kontrol manual (tombol prev/next)
- Quote inspiratif di bawah

**Informasi Foto Guru:**
- Ukuran foto: **400x300px** (lebar x tinggi)
- Format: JPG, PNG
- Sumber: Preferensi dari Pexels (https://pexels.com)
- Jenis: Portrait/Head shot (minimal dari bahu ke atas)
- Kualitas: Minimal 72 DPI untuk web

**Cara Mengubah Foto:**
```typescript
// Edit URL foto di data guru
const teachers = [
  {
    name: "Ust. Nama Lengkap",
    photo: "https://images.pexels.com/photos/XXXXX/pexels-photo-XXXXX.jpeg?auto=compress&cs=tinysrgb&w=400",
    education: "S1 Universitas",
    hafalan: "30 Juz",
    achievement: "Prestasi"
  },
];

// Format URL dari Pexels: .../pexels-photo-[ID].jpeg?auto=compress&cs=tinysrgb&w=400
// w=400 artinya lebar 400px (tinggi otomatis maintain ratio)
```

**Cara Mengubah Data Guru:**
```typescript
// Struktur data guru
{
  name: "Ust. Nama Lengkap",           // Nama guru
  photo: "https://url-foto.jpg",       // URL foto (400x300px)
  education: "S1/S2/LIPIA/dll",        // Pendidikan
  hafalan: "30 Juz/15 Juz/dll",        // Jumlah hafalan
  achievement: "Prestasi atau keahlian" // Pencapaian utama
}

// Tambah guru baru (copy struktur di atas)
// Edit atau hapus guru (hapus satu objek dari array)
```

**Navigasi Carousel:**
- Auto-scroll ke kanan dengan pausable on hover
- Tombol navigasi (< >) untuk scroll manual
- Looping infinit: ketika sampai guru terakhir, kembali ke guru pertama
- Pause 3 detik setelah klik tombol manual sebelum auto-scroll lagi

---

### **11. components/FinalCTA.tsx**
Ajakan akhir untuk mendaftar via WhatsApp.

**Isi:**
- Headline: "Jangan Tunda Lagi"
- Tombol WhatsApp besar
- QR Code visual
- Nomor kontak: +62 898-0897-333

**Cara Mengubah:**
```typescript
// Ganti nomor WhatsApp
href="https://wa.me/6289808097333"  // Ganti angka

// Ganti teks ajakan
<h2>Headline Baru Anda</h2>
<p>Subtitle baru Anda</p>

// Ganti nomor tampilan
<p>+62 898-0897-333</p>  // Ganti nomor
```

---

### **12. components/Footer.tsx**
Footer dengan 3 kolom informasi.

**Isi:**
- **Kolom 1**: Alamat, telepon, email
- **Kolom 2**: Jadwal operasional
- **Kolom 3**: Media sosial (Instagram, Facebook)
- Copyright di bawah

**Cara Mengubah:**
```typescript
// Ganti alamat
<p>
  Alamat Baru<br />
  Kecamatan<br />
  Kota
</p>

// Ganti kontak
<p>+62 123-4567-890</p>
<p>email@domain.com</p>

// Ganti jadwal
<p>Senin - Jumat</p>
<p>08:00 - 20:00 WIB</p>

// Ganti link sosmed
href="https://instagram.com/username"
```

---

## 🎨 Warna dan Desain

### **Palet Warna**
```css
Primary (Biru Tua): #0A2647
Secondary (Orange): #F4A261
Accent (Hijau): #008037
Background Terang: #F7F8FA
Putih: #FFFFFF
Abu-abu: #6B7280
```

### **Font yang Digunakan**
```css
Heading: 'Poppins' (Bold, SemiBold)
Body Text: 'Nunito Sans' (Regular, SemiBold)
Arabic Text: 'Amiri' (Regular, Italic)
```

### **Cara Mengganti Warna**
Cari dan ganti kode warna di file komponen:

```typescript
// Contoh mengganti warna primary
bg-[#0A2647]  // Ganti dengan bg-[#KodeWarnaBaruAnda]
text-[#0A2647] // Ganti dengan text-[#KodeWarnaBaruAnda]
```

---

## 🔧 Cara Mengubah Konten

### **Mengubah Teks**
1. Buka file komponen yang ingin diubah (misal: `Hero.tsx`)
2. Cari teks yang ingin diganti
3. Edit langsung di dalam tag HTML/JSX
4. Save file

### **Mengubah Nomor WhatsApp**
Cari semua file yang mengandung nomor WA dan ganti:
```typescript
// Cari baris ini di semua file
href="https://wa.me/6289808097333"

// Ganti dengan nomor baru (format: 62 + nomor tanpa 0)
href="https://wa.me/62812XXXXXXXX"
```

**File yang perlu diganti:**
- `Navbar.tsx`
- `Hero.tsx`
- `Pricing.tsx`
- `FinalCTA.tsx`

### **Menambah/Mengurangi Komponen**
Edit file `App.tsx`:
```typescript
// Hilangkan komponen (comment atau hapus baris)
{/* <Problem /> */}

// Tambah komponen baru
import KomponenBaru from './components/KomponenBaru';
// ... lalu tambahkan di return:
<KomponenBaru />
```

### **Mengubah Urutan Section**
Edit `App.tsx` dan pindahkan baris komponen:
```typescript
// Sebelum
<Hero />
<Problem />

// Sesudah (Problem muncul duluan)
<Problem />
<Hero />
```

---

## 🚀 Tips Pengembangan

### **1. Menambah Icon Baru**
Website ini menggunakan `lucide-react`. Lihat icon di: https://lucide.dev

```typescript
// Import icon
import { IconName } from 'lucide-react';

// Gunakan
<IconName className="w-6 h-6 text-[#008037]" />
```

### **2. Menambah Animasi**
Edit `index.css` untuk membuat animasi baru:
```css
@keyframes namaAnimasi {
  from { /* state awal */ }
  to { /* state akhir */ }
}

.animate-nama-animasi {
  animation: namaAnimasi 1s ease-in-out;
}
```

### **3. Responsive Design**
Gunakan breakpoint Tailwind:
```typescript
// Mobile first
className="text-sm md:text-lg lg:text-xl"

// sm: 640px (mobile landscape)
// md: 768px (tablet)
// lg: 1024px (desktop)
// xl: 1280px (large desktop)
```

### **4. Menambah Section Baru**
1. Buat file baru di `src/components/NamaSection.tsx`
2. Copy struktur dari komponen yang sudah ada
3. Edit konten sesuai kebutuhan
4. Import dan tambahkan di `App.tsx`

**Template komponen baru:**
```typescript
export default function NamaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0A2647] mb-8">
          Judul Section
        </h2>
        {/* Konten Anda */}
      </div>
    </section>
  );
}
```

### **5. Testing Perubahan**
```bash
# Development mode (auto-reload)
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

### **6. Backup Sebelum Edit Besar**
```bash
# Copy file sebelum edit
cp src/components/Navbar.tsx src/components/Navbar.backup.tsx
```

---

## 📞 Informasi Kontak Website

**Nomor WhatsApp:** +62 898-0897-333
**Email:** info@rumahquran-alinsan.com
**Instagram:** @masjidrayaalinsan
**Facebook:** Masjid Raya Al-Insan
**Alamat:** Masjid Raya Al-Insan, Grogol Utara, Jakarta Selatan

---

## 📝 Checklist Edit Cepat

### Konten yang Sering Diubah:
- [ ] Nomor WhatsApp (4 file)
- [ ] Harga paket (Pricing.tsx)
- [ ] Testimoni (Testimonials.tsx)
- [ ] Data guru (Teachers.tsx)
- [ ] FAQ (FAQ.tsx)
- [ ] Alamat dan kontak (Footer.tsx)

### Styling yang Sering Diubah:
- [ ] Warna primary (#0A2647)
- [ ] Warna secondary (#F4A261)
- [ ] Warna accent (#008037)
- [ ] Font family
- [ ] Ukuran spacing

---

## 🎯 Alur Edit Cepat

1. **Ubah Teks** → Edit file komponen terkait
2. **Ubah Warna** → Cari `bg-[#...]` atau `text-[#...]` dan ganti
3. **Ubah Nomor WA** → Cari `wa.me/628...` di 4 file
4. **Tambah Konten** → Edit array data di komponen
5. **Hilangkan Section** → Comment di `App.tsx`
6. **Test** → Jalankan `npm run dev`
7. **Deploy** → Jalankan `npm run build`

---

**Selamat mengedit! Semoga dokumentasi ini membantu Anda memahami dan mengustomisasi website dengan mudah.** 🚀

---

*Dokumentasi dibuat: 24 Oktober 2025*
*Versi: 1.0*
