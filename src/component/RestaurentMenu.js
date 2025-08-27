import { useContext, useEffect, useState } from "react"
import { restAllList, cards } from '../utils/mockData'
//import { Menu_Item } from "../utils/constent"
import { useParams } from "react-router-dom"
import MenuItem from "./MenuItem"
//import useRestaurentMenu from "../utils/useRestaurentMenu"


const RestaurentMenu = () => {
   // const [menuItem ,setMenuItem]=useState('null')
   const [menuItem, setMenuItem] = useState(restAllList)
   // const [menuItem ,setMenuItem]=useState(item.id)....this used for custom hook
   const [selectedItem, setSelectedItem] = useState(null)
   const [displayMenu, selectDisplayMenu] = useState(false)
   const [cardDetails, setCardDetails] = useState(cards)
   const parms = useParams()
   //const menuItem= useRestaurentMenu()....calling custom hook

   //avoid this fetch data code for this create CustomHook
   useEffect(() => {
      fetchResMenuItem()
   }, [menuItem])

   const fetchResMenuItem = () => {
      //const menuItem = await fetch(Menu_Item+id||item.id)
      // const MenuItemJson= await menuItem.json()
      // setMenuItem(MenuItemJson)
      setMenuItem(restAllList)
      const menu = menuItem.find(item =>
         item.id == parms.id
      );
      setSelectedItem(menu)
   }

   const clickHadler = (index) => {
      selectDisplayMenu(displayMenu === index ? null : index)
   }


   return (
      <div>
         <div className="text-center my-4 " >
            <div>
               <span className="font-bold text-2xl">{selectedItem?.restaurantName}</span>
            </div>
            {
               cardDetails.map((details, index) => (
                  <div className="flex flex-col w-6/12 bg-gray-200 m-4 shadow-2xl" key={index}>
                     <div className="flex justify-between" isopen={displayMenu === index} onClick={() => clickHadler(index)}>
                        <span className="font-bold text-sm m-4">{details?.card?.card?.title}</span>
                        <span><img className="h-4 m-4 w-4" src="https://img.icons8.com/?size=192&id=wtW3pZAllO4k&format=png"></img></span>
                     </div>
                     {displayMenu === index && <span><MenuItem details={cardDetails} displayMenu={displayMenu}  /></span>}
                  </div>
               ))
            }

         </div>
      </div>
   )
}
export default RestaurentMenu