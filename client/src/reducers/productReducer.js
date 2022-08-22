export const getAllProductReducer = (state = {products: []}, action) =>{
    switch (action.type){
        case 'GET_PRODUCT_REQUEST':
            return{
                ...state,
                loading:true
            }
            case 'GET_PRODUCT_SUCCESS':
                return{
                    products: action.payload,
                    loading: true
                }
                case 'GET_PRODUCT_FAIL':
                    return{
                        error: action.payload,
                        loading: false
                    }
                default:
                    return state
    }
}
export const addProductReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_PRODUCTS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_PRODUCTS_SUCCESS":
        return {
          success: true,
          loading: false,
        };
      case "ADD_PRODUCTS_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getProductByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_PRODUCTBYID_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_PRODUCTBYID_SUCCESS":
        return {
          pizza: action.payload,
          loading: false,
        };
      case "GET_PRODUCTBYID_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const updateProductByIdReducer = (state = {}, action) => {
    switch (action.type) {
      case "UPDATE_PRODUCTBYID_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "UPDATE_PRODUCTBYID_SUCCESS":
        return {
          updatesuccess: true,
          updateloading: false,
        };
      case "UPDATE_PRODUCTBYID_FAIL":
        return {
          updateloading: false,
          updateerror: action.payload,
        };
      default:
        return state;
    }
  };
  