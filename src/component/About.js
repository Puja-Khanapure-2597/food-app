import UserClass from "./UserClass"
import React from "react"
class About extends React.Component {
    constructor() {
        super()
        // console.log('Parent Constructor')
    }

    async componentDidMount() {
        //console.log('Parent componenteDidMount')
    }

    render() {
        //console.log('Parent render')
        return (
            <div className='pt-20 rounded-2xl w-full'>
                <div className="flex justify-between bg-gray-100 max-h-full fixed">
                    <div className="w-96 mr-12">
                        <img className="h-24 p-6" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="aboutLogo" />
                    </div>
                    <div class="flex">
                        <ul className='flex items-center'>
                            <li className='px-2 font-bold'>
                                About Food
                            </li>
                            <li className='px-2 font-bold'>
                                Our Business
                            </li>
                            <li className='px-2 font-bold'>
                                Delivering For Everyone
                            </li>
                            <li className='px-2 font-bold'>
                                Newsroom
                            </li>

                            <li className='px-2 font-bold'>Investor Relations</li>
                            <li className='px-2 font-bold'>
                                Sustandibility
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100  text-center   flex-col space-y-4">
                    <h1 className="font-bold text-5xl pt-24 ">About Us</h1>
                    <p className="font-extralight">Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</p>
                    <img className="w-28 h-32 mx-[38rem]" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/instamart-1-282x300.webp" alt="instamart" />
                </div>
                <div className=" bg-gray-100 flex-col">
                    {/* <img className="w-28 ml-[28rem] h-32" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/instamart-1-282x300.webp" alt="instamart" /> */}
           
                    <div className="flex ">
                        <img className="w-28 h-[9rem]  ml-[20rem]" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/food.webp" alt="food" />
                        <img className="w-[5rem] ml-[12rem] mt-[5rem]" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-sign-198x300.webp" alt="Slogo" />
                        <img className="w-28 h-[9rem] ml-[13rem]" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/dineout-282x300.webp" alt="dineout" />
                    </div>
                    {/* <img className="w-12 mx-[40rem]" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-sign-198x300.webp" alt="Slogo" /> */}
                </div>

            </div>
        )
    }

}

export default About