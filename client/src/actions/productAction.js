import axios from 'axios'

export const getAllProducts =() => async (dispatch) => {
    dispatch ({type: 'GET_PRODUCT_REQUEST'})
    try {
        const res = axios.get('/api/products/getAllProducts')
        console.log(res)
        dispatch ({type: 'GET_PRODUCT_SUCCESS',payload:res.data})
    } catch (err) {
        dispatch ({type: 'GET_PRODUCT_FAIL',payload: err})
    }
}