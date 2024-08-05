// 2-arrow.test.js  
import GetNeighborhoodsList from './2-arrow';  

test('Test addNeighborhood method', () => {  
  const neighborhoodsList = new GetNeighborhoodsList();  
  const result = neighborhoodsList.addNeighborhood('Noe Valley');  
  expect(result).toEqual(['SOMA', 'Union Square', 'Noe Valley']);  
});