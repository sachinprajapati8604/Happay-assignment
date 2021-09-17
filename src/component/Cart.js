import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaPlus, FaMinus } from 'react-icons/fa';
import data from './Data';


export default function Cart() {
    return (
        <div>
            <div className="container my-4">
                <Link to="/" className="backToHome"><FaArrowLeft /> Back to Home</Link>
                <h2 className="my-3">Order Summary (4 Item)</h2>
                <div class="row gx-5 my-4">
                    <div class="col">
                        <div class="p-3 border bg-light table-responsive">
                            <table class="table align-middle mytable">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-md-3">S No.</th>
                                        <th scope="col" className="col-md-3">ITEMS</th>
                                        <th scope="col" className="col-md-3">QTY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((e) => {
                                            return ( <tr>
                                                 <th scope="row">{e.id}</th>
                                                <td className="">{e.name}</td>
                                                <td className="d-flex"><button className="btn btn-secondary mx-2"><FaMinus/></button> <input type="number" class="form-control " min="1" max="10" />  <button className="btn btn-secondary mx-2"><FaPlus/></button></td>
                                            </tr>
                                            )
                                        })
                                    }
                                 
                                </tbody>
                            </table>
                            <Link to="/" className="nav-link"> <FaPlus />Add more items</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border price-box">
                            <h2>Price Details</h2>
                            <hr />
                            <div className="price-details">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor natus temporibus itaque similique tenetur suscipit animi, ut recusandae voluptas in modi sint veniam. Inventore quisquam illum perferendis ex, laboriosam impedit!
                            </div>
                            <hr />
                            <div className="tax">
                               <p>Total Saving : </p>
                               <p>Delivery Fee : </p>
                               <p>Tax and Charges : </p>
                            </div>
                            <hr />
                            <div className="finalpay">
                            <h5> To Pay</h5>
                            </div>

                            <button className="mx-2 btn btn-primary btn-block w-100 my-4">PLACE ORDER</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
