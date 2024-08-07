//0-promise.test.js  

import getResponseFromAPI from './0-promise.js';  

describe('getResponseFromAPI', () => {  
  test('should return a promise', () => {  
    const response = getResponseFromAPI();  
    expect(response instanceof Promise).toBe(true);  
  });  

  test('should resolve with the correct response', async () => {  
    const response = await getResponseFromAPI();  
    expect(response).toBe('Response from API');  
  });  
});