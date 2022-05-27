

const initialstate={
    product:[],
    selectedproduct:{},
    sortedData:[],
    logindata:{},
    token:"",
    cartData:[]

}
 export const Masaireducer=(state=initialstate,{type,payload})=>{
    //  console.log("stste" , state)
                 
    switch(type){
        case 'SET_PRODUCT':
            return{
                ...state,
                product:payload
            }
        case 'SELECTED_PRODUCT':
            return{
                ...state,
                selectedproduct:payload
            }  
        case 'SORTED_DATA':
            return{
                ...state,
                sortedData:payload
            } 
            case "LOGIN_DETAIL":
                return{
                    ...state,
                    logindata:payload,
                    token:payload
                } 

            case "NAVBAR_CART":
                return{
                    ...state,
                    cartData: payload
                }
           
            default:return state
                  
    }
 }