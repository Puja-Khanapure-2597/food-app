import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count1:1 ,
            userInfo:''
        }
        console.log('child Constructor Call')
    }

    async componentDidMount(){
        // const data =await fetch('url')
        // const datajson =await data.json
        // this.setState(datajson)
        console.log('child componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    
  render(){
    console.log('child render')
    const{name,location,email}=this.props
    const {count,count1}=this.state
    return(
        <div className="user_card">
            <h4>{count}</h4>
            <h4>{count1}</h4>
            <button onClick={()=>
            //console.log('count')
                this.setState(
                    {
                        count:this.state.count+1,
                        count1:this.state.count1+1
                    }
                )
                
            }>Count Increment</button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Email Id:{email}</h4>
        </div>
    )
  }
}
export default UserClass