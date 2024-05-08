import React from 'react';
import Menu from "../../Assets/newImage/collapse.png";
import "./Header.scss";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import Logo from "../../Assets/images/logo.png";
import {FcMenu} from "react-icons/fc";
import {MdClose} from "react-icons/md";
import {FcRight} from "react-icons/fc";

function NavbarComponent(props) {


    return (<div>

            <div className="position-relative">

                <div className="position-absolute top-0 start-0">
                    <Link to="/">
                        <img className="logo" src={Logo}/>
                    </Link>
                </div>

                <div className="position-absolute top-0 end-0">
                    <button type="button" className="btn btn-outline-light m-1" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                        {/*<img className="collapse-icon" src={Menu}/>*/}
                        <FcMenu size="42"/>
                    </button>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">

                                <Link to="/">
                                 <span data-bs-dismiss="modal">
                                <img className="logo" src={Logo}/>
                                 </span>
                                </Link>

                            </h1>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close"><MdClose
                                size="42"/></button>
                        </div>
                        <div className="modal-body position-relative">
                            <div className="container position-absolute top-50 start-50 translate-middle">
                                <div className="row">

                                    <div className="col-md-4">
                                        <ul className="nav flex-column">


                                            <Link to="/services">
                                         <span data-bs-dismiss="modal">
                                        <h2 className="navtitle">Services</h2>
                                         </span>
                                            </Link>

                                            <li className="nav-item">

                                                <HashLink className="text-black" to="/services/#app">
                                                <span data-bs-dismiss="modal">
                                                <h5><FcRight/> App Development</h5>
                                                    </span>

                                                </HashLink>

                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/services/#business">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Business Solutions</h5>
                                            </span>
                                                </HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/services/#cloud">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Cloud Services</h5>
                                            </span>
                                                </HashLink>
                                            </li>

                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/services/#team">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Team Augmentation</h5>
                                            </span>
                                                </HashLink>
                                            </li>

                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Business Solutions*/}
                                            {/*    </h5>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Cloud Services</h5>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Team Augmentation*/}
                                            {/*    </h5>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>

                                    <div className="col-md-4">
                                        <ul className="nav flex-column">

                                            <Link to="/about">
                                         <span data-bs-dismiss="modal">
                                        <h2 className="navtitle">About Us</h2>
                                         </span>
                                            </Link>

                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/about/#company">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Company</h5>
                                            </span>
                                                </HashLink>
                                            </li>

                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/about/#vision">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Our Vision</h5>
                                            </span>
                                                </HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/about/#culture">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Culture</h5>
                                            </span>
                                                </HashLink>
                                            </li>
                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/about/#partners">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Partners</h5>
                                            </span>
                                                </HashLink>
                                            </li>

                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Company</h5></a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Our Vision</h5></a>*/}
                                            {/*</li>*/}

                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Culture</h5></a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Partners</h5></a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="nav flex-column">

                                              <Link to="/contact">
                                         <span data-bs-dismiss="modal">
                                        <h2 className="navtitle">Contact Us</h2>
                                         </span>
                                            </Link>



                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/contact/#address">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Address</h5>
                                            </span>
                                                </HashLink>
                                            </li>

                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/contact/#address">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Send mail</h5>
                                            </span>
                                                </HashLink>
                                            </li>

                                            <li className="nav-item">
                                                <HashLink className="text-black" to="/blog">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> Blog</h5>
                                            </span>
                                                </HashLink>
                                            </li>


                                            <li className="nav-item">
                                                <HashLink className="text-black" to="#">
                                            <span data-bs-dismiss="modal">
                                                <h5><FcRight/> FAQ</h5>
                                            </span>
                                                </HashLink>
                                            </li>




                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="nav-link" href="#"><h5><FcRight/> Blog</h5></a>*/}
                                            {/*</li>*/}


                                        </ul>
                                    </div>
                                </div>
                                <hr></hr>


                                {/*<div className="row">*/}
                                {/*    <div className="col-md-4"></div>*/}
                                {/*    <div className="col-md-4">About Us</div>*/}
                                {/*    <div className="col-md-4"></div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;