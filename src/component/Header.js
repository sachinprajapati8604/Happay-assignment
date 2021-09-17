import React from 'react'
import { FaUserCircle, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header({count}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg" alt="" /> <span>Happay</span> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link className="nav-link active " aria-current="page" to="/cart"><FaCartPlus />({count})  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><FaUserCircle /></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
