import React,{Component} from "react";
import CustService from "../Services/CustService";
import { Link } from "react-router-dom";

class DisplayCust extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            employee:[],
            num:1
        }
    }

    componentDidMount()
    {
        CustService.fetchEmployee().then(result=>{
            this.setState({
                employee:result.data
            })
        })
    }
    deleteEmp(id)
    {
      CustService.deleteEmployee(id).then(result=>{
        this.setState({
          employee:this.state.employee.filter(emp=>emp.id!=id)
        })
      })
    }

    updateEmp(id)
    {
      this.props.history.push(`/updateEmp/`+id)
    }


    render()
    {
        return(
           <div>
             <style>{'body { background-color: #99ccff; }'}</style>
           <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      
      <th scope="col"> Name</th>
      <th scope="col">Number</th>
      <th scope="col">Address</th>
      <th scope="col">Cash Mode</th>
      <th scope="col">Delivery Date</th>
      <th scope="col">Order Date</th>
      <th scope="col">Total Amount</th>
    
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.employee.map(emp=>
    <tr>
      <th scope="row">{this.state.num++}</th>
      <td>{emp.name}</td>
      <td>{emp.contact}</td>
      <td>{emp.address}</td>
      <td>{emp.pay_mode}</td>
      <td>{emp.deliver_date}</td>
      <td>{emp.order_date}</td>
      <td>{emp.total_amt}</td>
      
      <td><button class="btn btn-danger" onClick={()=>this.deleteEmp(emp.id)}>Delete</button>
    &nbsp;
    <button class="btn btn-warning" onClick={()=>this.updateEmp(emp.id)}>Update</button></td>

    </tr>
          )}
  </tbody>
</table>
<Link to ="/insertEmp"><button class="btn btn-success">Add Customer</button></Link>
</div>
        )
    }
}
export default DisplayCust