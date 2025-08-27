import UserClass from "./UserClass"
import React from "react"
class About extends React.Component {
    constructor() {
        super()
        console.log('Parent Constructor')
    }

    async componentDidMount() {
        console.log('Parent componenteDidMount')
    }

    render() {
        console.log('Parent render')
        return (
            <div className=''>
                <div className="flex justify-between bg-gray-100">
                    <img className="h-12" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" alt="aboutLogo" />
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
                <div className="bg-gray-200 h-96 text-center ">
                    <h1 className="font-bold text-5xl pt-32 ">About Us</h1>
                </div>
            </div>
        )
    }

}

export default About