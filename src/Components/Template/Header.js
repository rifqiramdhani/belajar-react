import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    logOut = () => {
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div>
                <header id="header" className="header fixed-top d-flex align-items-center">

                    <div className="d-flex align-items-center justify-content-between">
                        <a href="/" className="logo d-flex align-items-center">
                            <img src="/vendor/assets/img/logo.png" alt="" />
                            <span className="d-none d-lg-block">NiceQii</span>
                        </a>
                        <i className="bi bi-list toggle-sidebar-btn"></i>
                    </div>

                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">

                            <li className="nav-item d-block d-lg-none">
                                <a className="nav-link nav-icon search-bar-toggle " href="#">
                                    <i className="bi bi-search"></i>
                                </a>
                            </li>

                            <li className="nav-item dropdown pe-3">

                                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                    <img src="/vendor/assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                    <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>Kevin Anderson</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <button type="button" className="dropdown-item d-flex align-items-center" onClick={this.logOut}>
                                            <i className="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                        </button>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>

                </header>
            </div>
        )
    }
}
