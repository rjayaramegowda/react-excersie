import menu from "../../data.json";

const productReducer = (state = productList, action) => {  
  switch (action.type) {    
    default:
      return state;
  }
};

export default productReducer;


// productList
const productList = Object.values(menu);

