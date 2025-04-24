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
export const run = async ({
  url,
  method,
  headers,
  body,
  onProgress,
}: ApiProps) => {
  const response = await axios({
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
    },
  });

  var dataObj = response.data;

  if (dataObj) {
    dataObj = JSON.parse(dataObj);
  }
  return { ...response, ...{ data: dataObj } };
};
export const http = {
  run,
};

export default http;
