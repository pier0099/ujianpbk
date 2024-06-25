/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // Tambahkan variabel lingkungan lain yang Anda gunakan di sini.
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }