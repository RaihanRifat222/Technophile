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