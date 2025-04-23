import axios from 'axios';
import { AppConfig } from '@tribu/utils';
interface ApiProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  showLoader?: boolean;
  headers?: any;
  onProgress?: (progress: number) => void;
}
export const run = ({ url, method, headers, body, onProgress }: ApiProps) => {
  return axios({
    url: `${AppConfig.VITE_BASE_URL}/${url}`,
    method: method,
    headers: headers,
    data: body,
    responseType: 'stream',
    onDownloadProgress: (event) => {
      const progress = (event.loaded / event.bytes) * 100;
      if (onProgress) {
        onProgress(progress);
      }
      console.log(event);
    },
  });
};
export const http = {
  run,
};

export default http;
