//import { FOOD_LOGO } from "../utils/constent";
//import  FOOD_LOGO  from "../../imag/crispy-mixed-pizza-with-olives-sausage.jpg";
const ResCard = ({restData}) => {
    const {restaurantName,cuisine,stars,avgTime,imageUrl}=restData
    return (
      <div className="bg-gray-50 flex-row rounded-xl  justify-items-center px-2 m-4 w-48 h-60 " >
        <img
           className="h-28 w-36 py-2 rounded-xl align-middle"
           alt="food logo"
          src={imageUrl}/>
        <div className="ResName pt-4">
          <h4 className="font-bold">{restaurantName}</h4>
          <h5 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-48">{cuisine}</h5>
          <h5 className="font-mono">{stars}stars</h5>
          <h5 className="font-extralight">{avgTime}min</h5>
        </div>
      </div>
    );
  };

  export default ResCard


// heigher order componanet.
export const WithPromotedCard=(ResCard)=>{
  return(props)=>{
    return(
    <div>
       <label className="absolute bg-black text-white px-2">Promoted</label>
       <ResCard {...props}/>
    </div>
    )
  }
} 