import Product from "../../component/Product";

// For add item to cart
export const addCart = (Product) => {
    return{
        type:"ADDCART",
        payload : Product
    }
}
// For delete item to cart
export const delCart = (Product) => {
    return{
        type:"DELCART",
        payload : Product
    }
}