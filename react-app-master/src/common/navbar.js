import React, { Component } from 'react';
import NavItem from './nav-item';

class Navbar extends Component {

    handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        window.location.reload();
        window.location.href = "/login";
    }

    render() { 
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavItem content={"Home"} url="/" isActive={"active"} />
                        <NavItem content={"Counter"} url="/counter"/>
                        <NavItem content={"Users"} url="/users"/>
                        <NavItem content={"Todos"} url="/todos"/>
                        <NavItem content={"Posts"} url="/posts"/>
                        <NavItem content={"Login"} url="/login"/>
                        <NavItem content={"Log Out"} onClick={this.handleLogout}/>
                    </div>
                </div>
                </nav>
            </>
        );
    }
}
 
export default Navbar;