const env = import.meta.env;

export const AppConfig = {
  VITE_BASE_URL: env.VITE_BASE_URL,
  VITE_MAP_BOX_KEY: env.VITE_MAP_BOX_KEY,
};

export default AppConfig;
