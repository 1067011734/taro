import { wrapRequest } from './_utils';

export const getUserData = wrapRequest('getName', {
  mock: true
});

export const getUserData2 = wrapRequest('getUser2', {
  mock: false,
});
