import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavItem extends Component {
    render() { 
        const text = this.props.content;
        const isActive = this.props.isActive;
        const url = this.props.url;
        const onClick = this.props.onClick;

        return (
            <>
                {/* <a className="nav-item nav-link active" href="#">{text}</a> */}
                {/* <a className={`nav-item nav-link ${isActive}`} href="#">{text}</a> */}
                <Link onClick={onClick} to={url} className={`nav-item nav-link ${isActive}`}>{text}</Link>
            </>
        );
    }
}
 
export default NavItem;