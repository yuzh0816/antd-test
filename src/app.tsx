import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';

// 获取初始化状态
export async function getInitialState(){
  return {
    settings: defaultSettings,
  };
}

// Layout
export const layout = ({ initialState }) => {
  return {
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
