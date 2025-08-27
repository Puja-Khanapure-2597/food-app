import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"


const MenuItem = ({ details, displayMenu }) => {
    const dispatch=useDispatch()
    const [itemDetails, setItemDetails] = useState(details[displayMenu]?.card?.card?.itemCards)
    // console.log('itemDetails',itemDetails)
    // console.log('displayMenu',displayMenu)
    const addItemHandler=()=>{
        dispatch(addItem())
    }

    return (
        <div>
            {
                itemDetails.map((item, index) => (
                    <div key={index} className="flex justify-between text-left px-4">
                        <span>{item?.card?.info.name}</span>
                        <span>{(item?.card?.info.price/100)}</span>
                        <button className=" bg-black text-white px-2 my-2" onClick={addItemHandler}>Add</button>
                    </div>
                ))

            }
        </div>
    )
}
export default MenuItem