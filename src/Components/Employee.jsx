import React, { Component } from 'react'
import employees from './Data.js'
class Employee extends Component {
    employees = employees
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.employees)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-hover">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        employees.map((employee, index) => {
                                            return <tr key={index}>
                                                <td>{employee.id}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.gender}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee