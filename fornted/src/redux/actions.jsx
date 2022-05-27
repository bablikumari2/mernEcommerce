import axios from "axios"

  export const setproducts=(data)=>({
   
    type:'SET_PRODUCT',
    payload:data
  })
  
  export const selectedproduct=(data)=>({
      type:'SELECTED_PRODUCT',
      payload:data
  })

  export const sortedProducts=(data)=>({
    type:'SORTED_DATA',
    payload:data
})

export const Login_detail=(data)=>({
  type:"LOGIN_DETAIL",
  payload:data
})

export const navbar_cart=(data)=>({
  type:"NAVBAR_CART",
  payload:data
})

export const navCart = () => (dispatch) => {
  axios.get("https://ecommerce-masai.herokuapp.com/cartproduct").then(({data})=>{
    dispatch(navbar_cart(data))
  }).then((res) => console.log("navv"))
}

