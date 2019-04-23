import { wrapRequest } from './_utils';

export const getUserData = wrapRequest('getUser', {
  mock: false
});

export const getUserData2 = wrapRequest('getUser2', {
  mock: false,
});
