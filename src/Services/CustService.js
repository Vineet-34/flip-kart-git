import axios from "axios";

class CustService
{

    createEmployee(employee)
    {
        return axios.post("http://localhost:9877/emp/saveCus",employee)
    }
    fetchEmployee()
    {
        return axios.get("http://localhost:9877/emp/getEmps")
    }

    deleteEmployee(id)
    {
        return axios.delete("http://localhost:9877/emp/deleteEmp/"+id)
    }
    fetchEmployeeById(id)
    {
        return axios.get("http://localhost:9877/emp/getEmpById/"+id)
    }
    updateEmp(employee)
    {
        return axios.put("http://localhost:9877/emp/updateEmp",employee)
    }

}
export default new CustService()