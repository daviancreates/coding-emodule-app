coding-emodule-app/
├── app/                      # 📱 LAYER NAVIGASI (Expo Router)
│   ├── (tabs)/               # Menu utama di bagian bawah (Tab Bar)
│   │   ├── index.tsx         # Halaman Dashboard / Progress Belajar (Ala Mimo)
│   │   ├── leaderboard.tsx   # Halaman Peringkat User (Gamifikasi)
│   │   └── profile.tsx       # Halaman Profil & Pengaturan User
│   ├── _layout.tsx           # Pengatur navigasi global aplikasi
│   └── course/               # Halaman modul belajar khusus
│       ├── [id].tsx          # Halaman dinamis tempat kuis/coding per modul
│       └── _layout.tsx
│
├── src/                      # 🧠 LAYER LOGIKA UTAMA (Buat folder baru ini nanti)
│   ├── webview/              # 🌐 TEMPAT CODEMIRROR (HTML & JS Editor)
│   │   └── editor.html       # File web statis tempat CodeMirror dijalankan
│   ├── services/             # 🔌 KONEKSI LUAR (API & Database)
│   │   ├── supabase.ts       # Setup & Inisialisasi Supabase Client
│   │   └── piston.ts         # Fungsi untuk menembak Piston API (Run Code)
│   ├── store/                # 💾 STATE MANAGEMENT (Zustand + Async Storage)
│   │   └── useGameStore.ts   # Logika penyimpan Skor, Nyawa (Hearts), & Progres
│   ├── utils/                # 🧪 AUTOMATED GRADING (Logika Penilaian)
│   │   └── codeEvaluator.ts  # Fungsi Regex/Eval untuk periksa jawaban koding user
│   └── types/                # 📐 VALIDASI DATA (Zod & TypeScript)
│       └── schema.ts         # Skema data user, kuis, dan sertifikat
│
├── assets/                   # 🎨 ASET MEDIA
│   ├── images/               # Logo, icon, badge pencapaian (Achievements)
│   ├── audio/                # Suara .mp3 (Ting! saat benar, Tetot! saat salah)
│   └── animations/          # File .riv dari Rive (Maskot interaktif)
│
├── tailwind.config.js        # Konfigurasi gaya tampilan NativeWind
├── app.json                  # Konfigurasi nama & icon aplikasi Expo
└── package.json              # Daftar KTP library proyek
