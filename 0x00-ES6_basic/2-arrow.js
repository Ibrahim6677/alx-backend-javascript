// 2-arrow.js  
export default class GetNeighborhoodsList {  
    constructor() {  
      this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];  
    }  
  
    addNeighborhood = (newNeighborhood) => {  
      this.sanFranciscoNeighborhoods.push(newNeighborhood);  
      return this.sanFranciscoNeighborhoods;  
    };  
  }