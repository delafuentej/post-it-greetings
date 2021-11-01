import React from "react"

import "./UserInput.css"

const UserInput =(props)=>{

   
        return(
            <>
                <form
                className="form-container"
                >
                    <input 
                        className="input-text"
                        onChange={props.onChangeProps}
                
                        value={props.name} />
                </form>
            </>

        )

        
    
}

export default UserInput;

