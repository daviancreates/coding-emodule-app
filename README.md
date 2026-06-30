# 📱 coding-emodule-app

Aplikasi E-Module Pembelajaran Coding Interaktif menggunakan Expo Router, Tailwind (NativeWind), dan Supabase.

## 📂 Struktur Arsitektur Proyek

```text
coding-emodule-app/
├── app/                          # 🗂️ LAYER NAVIGASI (Expo Router)
│   ├── (tabs)/                   # 📌 Menu utama di bagian bawah (Tab Bar)
│   │   ├── index.tsx             # 📊 Halaman Dashboard / Progress Belajar (Ala Mimo)
│   │   ├── leaderboard.tsx       # 🏆 Halaman Peringkat User (Gamifikasi)
│   │   └── profile.tsx           # 👤 Halaman Profil & Pengaturan User
│   │   └── _layout.tsx           # ⚙️ Pengatur navigasi global aplikasi
│   └── course/                   # 📚 Halaman modul belajar khusus
│       ├── html/                 # 🌐 Section HTML
│       │   ├── index.tsx         # 👨‍💻 Halaman Praktek HTML
│       │   ├── [id].tsx          # 📝 Halaman dinamis tempat kuis/coding per modul
│       │   └── _layout.tsx       # ⚙️ Pengatur navigasi modul HTML
│       ├── css/                  # 🎨 Section CSS
│       │   ├── index.tsx         # 👨‍💻 Halaman Praktek CSS
│       │   ├── [id].tsx          # 📝 Halaman dinamis tempat kuis/coding per modul
│       │   └── _layout.tsx       # ⚙️ Pengatur navigasi modul CSS
│       ├── js/                   # 🤖 Section JavaScript
│       │   ├── index.tsx         # 👨‍💻 Halaman Praktek JS
│       │   ├── [id].tsx          # 📝 Halaman dinamis tempat kuis/coding per modul
│       │   └── _layout.tsx       # ⚙️ Pengatur navigasi modul JavaScript
│       └── _layout.tsx           # ⚙️ Pengatur navigasi global modul
│
├── src/                          # 🧠 LAYER LOGIKA UTAMA
│   ├── webview/                  # 🌐 TEMPAT CODEMIRROR (HTML & JS Editor)
│   │   └── editor.html           # 📄 File web statis tempat CodeMirror dijalankan
│   │
│   ├── services/                 # 🔌 KONEKSI LUAR (API & Database)
│   │   ├── supabase.ts           # ⚡ Setup & Inisialisasi Supabase Client
│   │   └── piston.ts             # 🚀 Fungsi untuk menembak Piston API (Run Code)
│   │
│   ├── store/                    # 💾 STATE MANAGEMENT (Zustand + Async Storage)
│   │   └── useGameStore.ts       # 🕹️ Logika penyimpan Skor, Progress, dan Batas Waktu
│   │
│   ├── utils/                    # 🤖 AUTOMATED GRADING (Logika Penilaian)
│   │   └── codeEvaluator.ts      # 🔍 Fungsi Regex/Eval untuk periksa jawaban koding user
│   │
│   ├── types/                    # ⚠️ VALIDASI DATA (Zod & TypeScript)
│   │   └── schema.ts             # 📐 Skema data user, kuis, dan sertifikat
│   │
│   ├── modals/                   # 🎲 Modal interaktif untuk test
│   │   ├── CodeTestModal.tsx     # 💻 Modal untuk menyelesaikan test
│   │   └── GradeModal.tsx        # 🔥 Modal untuk menampilkan nilai
│   │
│   ├── components/               # 🌊 Component reusable
│   │   ├── CodeEditor.tsx        # 👨‍💻 Component editor kode
│   │   ├── InstructionCard.tsx   # 📚 Komponen instruksi
│   │   └── ResultCard.tsx        # 🎉 Komponen hasil test
│   │
│   ├── hooks/                    # ✨ Hooks untuk logika yang sering digunakan
│   │   ├── useCodeSubmit.ts      # 👤 Hook untuk mengirim kode ke server
│   │   ├── useTestCompletion.ts  # 💯 Hook untuk mengatur tahapan penilaian test
│   │   └── useTimer.ts           # ⏳ Hook untuk mengatur timer
│   │
│   ├── api/                      # 🧩 API endpoints
│   │   └── unlockModule.ts       # 🔓 Endpoint untuk membuka modul berikutnya
│   │
│   ├── context/                  # 🌐 Context for user data and navigation
│   │   └── AppContext.tsx        # ⏳ Hook and Provider for user data and navigation
│   │
│   ├── features/                 # 🔥 Fitur tambahan
│   │   ├── leaderboard/          # 🎉 Leaderboard feature
│   │   │   ├── index.tsx         # Halaman leaderboard global dan peringkat user
│   │   │   └── _layout.tsx       # Pengatur navigasi leaderboard
│   │   ├── challenge/            # 🔥 Challenge and Quest
│   │   │   ├── dailyChallenge.tsx    # Tantangan harian
│   │   │   └── weeklyQuest.tsx     # Tantangan mingguan
│   │   ├── community/          # 👤 Community features
│   │   │   ├── index.tsx         # Halaman forum
│   │   │   └── ChatComponent.tsx   # Komponen chat interaktif
│   │   └── progressTracking/     # 📈 Progress tracking
│   │       ├── index.tsx         # Halaman tracking progres user
│   │       └── _layout.tsx       # Pengatur navigasi tracking progres
│   │
│   └── feedback/                 # 💬 Feedback and Suggestions
│       ├── index.tsx             # Form feedback
│       └── _layout.tsx           # Pengatur navigasi feedback
│
├── assets/                       # 🎨 ASET MEDIA
│   ├── images/                   # 🖼️ Logo, icon, badge pencapaian (Achievements)
│   ├── audio/                    # 🎵 Suara .mp3 (Ting! saat benar, Tetot! saat salah)
│   └── animations/               # 🎬 File .riv dari Rive (Maskot interaktif)
│
├── tailwind.config.js            # 🎨 Konfigurasi gaya tampilan NativeWind
├── app.json                      # ⚙️ Konfigurasi nama & icon aplikasi Expo
└── package.json                  # 📦 Daftar KTP library proyek
```
