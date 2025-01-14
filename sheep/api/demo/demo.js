import request from '@/sheep/request';

const DemoApi = {
  // 接口测试
  getDemoTest: () => {
    return request({
      url: '/demo/test/get',
      method: 'GET'
    });
  },
};

export default DemoApi;
