import Taro from '@tarojs/taro'

const getHost = () => {
  let hostname = '';
  if (process.env.NODE_ENV === 'development') {
    hostname = 'http://localhost:8880';
  }
  if (process.env.NODE_ENV === 'production') {
    hostname = 'https://www.baidu.com';
  }
  return hostname;
};

export const wrapRequest = (url = '', config) => {
  return (data = {}, params = {}) => {
    // 返回一个promise的request
    return request(data, params, url, config);
  };
};

export const request = (data, params, url, config) => {
  const base = {
    method: 'POST',
    ...config,
  };

  const origin = base.mock ? 'mock' : 'apis';

  const baseUrl = `${getHost()}/${origin}/${url}`;

  params = { ...base, ...params };

  const { method } = params;

  return new Promise((resolve, reject) => {
    Taro.request({
      method: method,
      // 客户端发送服务端的数据格式为json
      headers: { 'content-type': 'application/json; charset=utf-8' },
      url: baseUrl,
      data: data,
    })
      .then((response) => {
        // eslint-disable-next-line no-shadow
        const { data } = response;
        if (!data) {
          // errorMsg('服务器未响应数据');
          // return;
        }
        if (params.okMsg) {
          // okMsg(params.okMsg);
          // return;
        }
        resolve(data);
      })
      .catch(error => {
        // console.info(error);
        reject(error);
      });
  });
};
