import React,{Component} from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import CustService from "../Services/CustService";

class UpdateCust extends Component
{
constructor(props)
{
    super(props)
    this.state={
        
        name:"",
        contact:"",
      
//extra added
        address:"",
        pay_mode:"",
        order_date:"",
        deliver_date:"",
        total_amt:null,

        nameMsg:"",
        contactMsg:"",
      

        //extra added
        addressMsg:"",
        payMsg:"",
        orderMsg:"",
        deliverMsg:"",
        amtMsg:"",
        id:this.props.match.params.id //id to fetch

    }
    this.onChangeEmpData=this.onChangeEmpData.bind(this)
    this.onSubmitEmpData=this.onSubmitEmpData.bind(this)
}
componentDidMount()
{
    CustService.fetchEmployeeById(this.state.id).then(result=>{
        this.setState({
            name:result.data.name,
            contact:result.data.contact,
            address:result.data.address,
            pay_mode:result.data.pay_mode,
            order_date:result.data.order_date,
            deliver_date:result.data.deliver_date,
            total_amt:result.data.total_amt
        })
    })
}


onChangeEmpData(event)
{
    let name=event.target.name;
    // let value=event.target.value;
     let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
   

   
    this.setState({
        [name]:value,
       
        
    })
   
}
onSubmitEmpData(event)
{
    //alert("hello")
    event.preventDefault();

     var pattern = /^[A-Za-z]+$/;
    if (!pattern.test(this.state.name)){
        this.setState({
            nameMsg:"Please Enter Only Alphabets"
        })
    }else if(this.state.name==="")
    {
        this.setState({
            nameMsg:"Please Enter the name"
        })
    }
    else{
        this.setState({
            nameMsg:""
        })
     }

     
if(this.state.contact==="")
{
    this.setState({
        contactMsg:"Please Enter the Contact Number"
    })
}
else{
   
     var pattern = new RegExp(/^[789]\d{9}$/);
    if (!pattern.test(this.state.contact)){
        this.setState({
            contactMsg:"Please Enter Only Numbers"
        })
    }else if(this.state.contact.length !=10){
        this.setState({
            contactMsg:"Must 10 digit"
        })
    }else{
    this.setState({
        contactMsg:""
    })
}
}

  
if(this.state.pay_mode===""){
            this.setState({
               payMsg:"Please choose the mode"
            })
        }
            else{
                this.setState({
                    payMsg:""
                })
             }

  
if(this.state.order_date===""){
            this.setState({
               orderMsg:"Enter the order date"
            })
        }
            else{
                this.setState({
                    orderMsg:""
                })
             }      
             
               
if(this.state.deliver_date===""){
    this.setState({
       deliverMsg:"Please choose the delivery date"
    })
}
    else{
        this.setState({
            deliverMsg:""
        })
     }

     
if(this.state.total_amt==="")
{
    this.setState({
        amtMsg:"Please Enter the correct amount"
    })
}
else
{
var pattern = new RegExp(/[0-9.]+$/);
if (!pattern.test(this.state.total_amt)){
    this.setState({
        amtMsg:"Please Enter Only Numbers"
    })
}
else{
    this.setState({
        amtMsg:""
    })
}
}
         

        
        if(this.state.name!="" && this.state.contact!=""  && this.state.address!="" && this.state.pay_mode!=""
       && this.state.deliver_date!="" && this.state.order_date!="" && this.state.total_amt!="" && this.state.id!="")       
        
{
    console.log("hello")
    let employee={
        name:this.state.name,
        contact:this.state.contact,
        address:this.state.address,
        pay_mode:this.state.pay_mode,
        order_date:this.state.order_date,
        deliver_date:this.state.deliver_date,
        total_amt:Number(this.state.total_amt),
        id:Number(this.state.id)
    }
    //console.log(employee)

    CustService.updateEmp(employee).then(result=>{
        console.log(result)
        this.props.history.push("/fetchEmp")
    })

}
     
        
}

    render()
    {
        return(
            <div align="center">
                <style>{'body { background-color: #99ff33; }'}</style> 
                <h1>Update Customer</h1>
                <hr/>
                <form onSubmit={this.onSubmitEmpData}>
                    <table>
                        <tr>
                          <td>ID</td> 
                          <td>:</td>
                          <td><input type="text" name="id" onChange={this.onChangeEmpData} value={this.state.id} disabled/><div><small>{this.state.nameMsg}</small></div></td> 
                        </tr>
                        <tr>
                          <td> Name</td> 
                          <td>:</td>
                          <td><input type="text" name="name" onChange={this.onChangeEmpData} value={this.state.name} /><div><small>{this.state.nameMsg}</small></div></td> 
                        </tr>
                        <tr>
                          <td> Contact</td> 
                          <td>:</td>
                          <td><input type="text" name="contact" onChange={this.onChangeEmpData} value={this.state.contact}/><div><small>{this.state.contactMsg}</small></div></td> 
                        </tr>
                       
                       
                        <tr>
                          <td>Address</td> 
                          <td>:</td>
                          <td><textarea type="address"  name="address" onChange={this.onChangeEmpData}value={this.state.address} /><div><small>{this.state.addressMsg}</small></div></td> 
                        </tr>
                        <tr>
                           <td>Payment Mode</td>
                           <td>:</td>
                           <td><input type="radio"  name="pay_mode" onChange={this.onChangeEmpData} value={this.state.pay_mode} />
                           <label>COD </label>
                           <input type="radio" name="pay_mode" onChange={this.onChangeEmpData} value={this.state.pay_mode}/>
                           <label >Card</label><div><small>{this.state.payMsg}</small></div></td>
                       </tr>
                        <tr>
                          <td>Order Date</td> 
                          <td>:</td>
                          <td><input type="date" name="order_date" onChange={this.onChangeEmpData} value={this.state.order_date} /><div><small>{this.state.orderMsg}</small></div></td> 
                        </tr>
                        <tr>
                          <td>Delivery Date</td> 
                          <td>:</td>
                          <td><input type="date" name="deliver_date" onChange={this.onChangeEmpData} value={this.state.deliver_date} /><div><small>{this.state.deliverMsg}</small></div></td> 
                        </tr>
                        <tr>
                          <td>Total Amount</td> 
                          <td>:</td>
                          <td><input type="text" name="total_amt" onChange={this.onChangeEmpData} value={this.state.total_amt} /><div><small>{this.state.amtMsg}</small></div></td> 
                        </tr>
                        <br/>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                            <Link to="/back"><button class="btn btn-primary">Cancel</button></Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary" >Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
export default UpdateCust