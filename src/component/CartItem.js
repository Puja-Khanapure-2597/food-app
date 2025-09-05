import { useDispatch } from "react-redux"
import RestaurentMenu from "./RestaurentMenu"
import { removeItem } from "../utils/cartSlice"

const CartItem=()=>{
    const dispatch=useDispatch()
    const clearItemHandler =()=>{
       dispatch(removeItem())
    }
    return(
        <div className="w-6/12 m-auto pt-20">
            <h1 className="font-bold">Cart</h1>
            <button className=" bg-black text-white px-2 my-2" onClick={clearItemHandler}>Clear Item</button>
            <RestaurentMenu/>
        </div>
    )
}
export default CartItem