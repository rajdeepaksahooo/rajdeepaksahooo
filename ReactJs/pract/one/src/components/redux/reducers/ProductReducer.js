import ActionTypes from '../constants/ActionTypes'
const inetialState = {
    products:[],
    page2:[],
    page3:[],
    page4:[],
    page5:[],
    page6:[],
    page7:[],
    page8:[],
    page9:[],
    page10:[],
    page11:[],
    page12:[],
    page13:[],
    page14:[],
    page15:[],
    page16:[],
    page17:[],
    page18:[],
    page19:[],
    page20:[],
    page21:[]
}
export const ProductReducer = (state=inetialState,{type,payload })=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        case ActionTypes.SET_PRODUCTS_ONE:
            return {...state,page2:payload};
        case ActionTypes.SET_PRODUCTS_TWO:
        return {...state,page3:payload};
        case ActionTypes.SET_PRODUCTS_THREE:
            return {...state,page4:payload};
        case ActionTypes.SET_PRODUCTS_FOUR:
            return {...state,page5:payload};
        case ActionTypes.SET_PRODUCTS_FIVE:
            return {...state,page6:payload};
        case ActionTypes.SET_PRODUCTS_SIX:
            return {...state,page7:payload};
        case ActionTypes.SET_PRODUCTS_SEVEN:
            return {...state,page8:payload};
        case ActionTypes.SET_PRODUCTS_EIGHT:
        return {...state,page9:payload};
        case ActionTypes.SET_PRODUCTS_NINE:
            return {...state,page10:payload};
        case ActionTypes.SET_PRODUCTS_TEN:
            return {...state,page11:payload};
        case ActionTypes.SET_PRODUCTS_ELEVEN:
            return {...state,page12:payload};
        case ActionTypes.SET_PRODUCTS_TWELVE:
            return {...state,page13:payload};
        case ActionTypes.SET_PRODUCTS_THIRTEEN:
            return {...state,page14:payload};
        case ActionTypes.SET_PRODUCTS_FOURTEEN:
            return {...state,page15:payload};

        case ActionTypes.SET_PRODUCTS_FIFTEEN:
            return {...state,page16:payload};
        case ActionTypes.SET_PRODUCTS_SIXTEEN:
            return {...state,page17:payload};
        case ActionTypes.SET_PRODUCTS_SEVENTEEN:
            return {...state,page18:payload};
        case ActionTypes.SET_PRODUCTS_EIGHTEEN:
            return {...state,page19:payload};
        case ActionTypes.SET_PRODUCTS_NINTEEN:
            return {...state,page20:payload};
        case ActionTypes.SET_PRODUCTS_TWENTY:
            return {...state,page21:payload};
            
        default:
            return state
    }
}
export default ProductReducer