import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



export const Header = () => (
    <div className="header" >
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>WanCert</h1>
                </Link>
            </div>
        </div>
    </div>
);


const mapDispatchToProps = (dispatch)=>({
    startLogout: () => dispatch(startLogout())
});

const ConnectedHeader = connect(undefined, mapDispatchToProps)(Header);

export default ConnectedHeader;