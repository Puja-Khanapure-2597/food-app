import ResCard, { WithPromotedCard } from './ResCard'
import { cards, restAllList } from '../utils/mockData'
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {
  const onlineStatus = useOnlineStatus()
  //const [restList, setrestList] = useState(restAllList)
  const [filterListData, setFilterListData] = useState(restAllList)
  const [serachText, setSerachText] = useState()
  const RestPromotedCard = WithPromotedCard(ResCard)
  const { userName, setUserName } = useContext(UserContext)

  const filterList = () => {
    //console.log('filterListData',filterListData)
    const finalFiltList = filterListData.filter(list => list.stars > 4)
    //console.log('finalFiltList',finalFiltList)
    setFilterListData(finalFiltList)
  }
  const searchList = (e) => {
    if (e.target.value == '') {
      setFilterListData(restAllList)
    }
    else {
      const filterSearchList = filterListData.filter((val) => val.restaurantName.includes(e.target.value))
      setFilterListData(filterSearchList)
    }
  }
  useEffect(() => {
    fecthData()
  }, [])

  const fecthData = async () => {
    // const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // const jsonData =await data.json()
    // console.log('jsonData',jsonData)
    //setrestList(jsonData)
  }

  if (onlineStatus === false) {
    return (
      <h1>OOPs!!! You are offline</h1>
    )
  }
  return (
    <div className="main-body">
      <div className="flex mx-3 pt-20">
        <div className='py-4'>
          <input className='border border-solid border-black' type='text' value={serachText} onChange={(e) => { searchList(e) }}
          />
          {/* <button
            className='px-4 mx-2 bg-green-100 rounded-md'
            onClick={() => {
              const filterSearchList = filterListData.filter((val) => val.restaurantName.toLocaleLowerCase().includes(serachText.toLocaleLowerCase()))
              setFilterListData(filterSearchList)
            }}>
            search
          </button> */}
        </div>
        <div>
          <button className='px-4 my-4 mx-2 bg-gray-100' onClick={filterList}>Top Rated Resturant</button>
          <label className='mx-2'>UserName:</label>
          <input className='border border-solid border-black' px-4 mx-4 type='text' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
        </div>
      </div>
      <div className="flex flex-wrap my-4 items-center ml-10" >
        {filterListData.map((item, index) => (
          <Link key={index} to={`/restaurentMenu/${item.id}`}>
            {item.promoted ? <RestPromotedCard restData={item} /> : <ResCard restData={item} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body