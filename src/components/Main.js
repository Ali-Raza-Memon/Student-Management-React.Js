import React from "react";

const Main = () => {


    return (
        <>

            <div>
                <h3 className="text-center fw-bold">Welcome to  Student Home Page </h3>
            </div>



            <button className="btn btn-outline-primary btn-lg">Add Student</button>


            <div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className="">
                                
                                <button className="btn btn-success btn-sm me-2">Update</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                                
                            </td>
                        </tr>
                        
                       
                    </tbody>
                </table>


            </div>



        </>
    )


}

export default Main