import React,{Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component
{

    render ()
    {
        return(
            
        <div >
            <style>{'body { background-color: yellow; }'}</style>
            <h1 style={{color:'red'}}>Welcome To Flipkart</h1>
            <hr/>
           <Link to ="/insertEmp"><button class="btn btn-success">Create Employee</button></Link> &nbsp; &nbsp;
           <Link to ="/fetchEmp"><button class="btn btn-success">Display  Employee</button></Link>
       
        </div>
        )    
}
 
}
export default Home