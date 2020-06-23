import menu from "../../data.json";

const productReducer = (state = productList, action) => {
  console.log("[productReducer] type = ", action.type);

  switch (action.type) {
    case "SAVE_PRODUCT":
      let item = state.filter((vo) => vo.itemId === action.data.itemId);
      let itemIndex = state.indexOf(item[0]);
      state[itemIndex] = action.data;
      return state;

    default:
      return state;
  }
};

export default productReducer;

// productList
const productList = Object.values(menu);
