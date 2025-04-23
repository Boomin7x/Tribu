// vite-env.d.ts
export interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_SECRET_KEY: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
