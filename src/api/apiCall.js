import Axios from 'axios';

const getCustomAxios = () => {
  const customAxios = Axios.create({});

  customAxios.interceptors.request.use(
    (reqConfig) => {
      // if (!reqConfig.headers.Authorization) {
      //   const token = AuthUtils.getToken();
      //   reqConfig.headers.Authorization = `Bearer ${token}`;
      // }
      return reqConfig;
    },
    (error) => Promise.reject(error)
  );

  customAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
      // const status = error?.response?.status;
      // if ((status === 403 || status === 401)) {

      // }
      return Promise.reject(error);
    }
  );
  return customAxios;
};

const callAPI = async ({
  method,
  url,
  data,
  params,
  responseType,
  onUploadProgress,
  headers,
  _async = true,
  _timeout = 2700000, //set timeout to 45 minutes
}) => {
  let response;
  const axios = getCustomAxios();
  axios.defaults.timeout = _timeout;
  try {
    const _param = {
      method,
      url,
      data,
      params,
      responseType,
      onUploadProgress,
      headers,
    };
    response = _async ? await axios({..._param}) : axios({..._param});
  } catch (err) {
    throw err;
  }
  return response;
};

export default callAPI;
