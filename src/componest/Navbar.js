import React from 'react'
import Sdebar from './Sdebar'
import './Navbar.css'
const Navbar = ({setSIdebar,SIdebar}) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark ">
                <div className="d-flex navbar-gap">

                    <div className="navbar-brand d-flex  n">
                    {SIdebar?<img className='img-fluid logo pr  ps-2' src='../img/logo-sm.png' alt='none'></img>:<img className='img-fluid logo pr w-25 ps-4 ms-2  ' src='../img/logo-light.png' alt='none'></img>}

                        <Sdebar SIdebar={SIdebar} setSIdebar={setSIdebar}/>

                        <select className=" bg-dark select1" aria-label="Default select example">
                            <option selected>Crete New</option>
                            <option value="1">New Project</option>
                            <option value="2">Cretes Users</option>
                            <option value="3">Setting</option>
                            <option value="3">Help & Support</option>

                        </select>

                        <select className=" bg-dark select1" aria-label="Default select example">
                            <option selected>Mega Menu</option>
                            <option value="1">New Project</option>
                            <option value="2">Cretes Users</option>
                            <option value="3">Setting</option>
                            <option value="3">Help & Support</option>
                        </select>



                    </div>
                    <form className="d-flex input-fell">
                        <div className="input-group mb-3 input-fell">
                            <span className="  search rounded-pill" >
                                <input type="text" className="form-control " placeholder="Searche..." aria-label="Recipient's username" aria-describedby="basic-addon2" />

                                <img src='../img/icons8-search-50.png' alt='none' className='img-sec rounded-circle ' />

                                <img src='../img/icons8-search-50.png' alt='none' className='img-sec rounded-circle none-img' />

                            </span>
                            <img src="../img/icons8-scan-24.png" alt='none' className='img-scn img-hide' />
                            <img src='../img/icons8-four-squares-50.png' alt='none' className='img-scn' />
                            <img src='../img/icons8-america-32.png' alt='none' className='img-scnimg-hide' />
                            <img src='../img/icons8-bell-24.png' alt='none' className='img-scn' />
                            <samp className='d-flex gap-3'>
                                <img src='../img/user-1.jpg' alt='none' className='img-scn rounded-circle img-hide' />
                                <select className=" bg-dark" aria-label="Default select example">
                                    <option selected>Geneva</option>
                                    <option value="1">My Account</option>
                                    <option value="2">Setting</option>
                                    <option value="3">Lock Screen</option>
                                    <option value="3">Logout</option>
                                </select>
                            </samp>
                            <img src='../img/icons8-gear-16.png' alt='none' className='img-scn' />
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
