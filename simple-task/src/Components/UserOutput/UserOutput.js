import React from "react";

//styles:
import "./UserOutput.css";

const UserOutput=(props)=>{
    
   

    
        return(
            <>
                <div className="card">
                    <p
                    className="first-p">
                    Hi aliens!
                    </p>

                    <p
                    
                    className="second-p">
                    Here is {props.userNameProps}!

                    </p>

                </div>
                
            </>
            

        )

    
}

export default UserOutput;