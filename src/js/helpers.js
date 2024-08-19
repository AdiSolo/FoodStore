import { async } from 'regenerator-runtime';

import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const getJson = async function (url) {
  try {
    const res = await Promise.race([fetch(`${url}`), timeout(TIMEOUT_SEC)]);
    if (!res.ok) throw new Error(`Wrong recipe id: ${data.message} 💥💥💥`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
