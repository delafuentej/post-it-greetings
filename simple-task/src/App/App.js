import React from "react";
import UserInput from "../Components/UserInput/UserInput";
import UserOutput from "../Components/UserOutput/UserOutput";
//styles:
import "./App.css";
class App extends React.Component{
   
        state={
            userName:""
        }
    

    onChangeHandler= (e) =>{
        this.setState({
            userName:e.target.value
        })
    } 
    


    componentDidMount(){
        const temp=localStorage.getItem("userName");
        const loaded=JSON.parse(temp);
        if(loaded){
            this.setState({
                userName:loaded
            })
        }

    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.userName!==this.state.userName){
            const temp=JSON.stringify(this.state.userName)
            localStorage.setItem("userName",temp)

        }
        
    }




    render(){
        return(
            <>
                <UserInput 
                onChangeProps={this.onChangeHandler}
                name={this.state.userName}
                />
                <UserOutput  userNameProps={this.state.userName}/>
                <UserOutput  userNameProps={this.state.userName}/>
                <UserOutput userNameProps={this.state.userName}/>
                <UserOutput 
                userNameProps="e.t."
                />


            </>
            
        )
    }
}

export default App;