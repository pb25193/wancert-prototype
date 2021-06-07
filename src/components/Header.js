import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



export const Header = (props) => {
    const wallet = props.wallet;
    const web3 = wallet.web3;
    const chainId = wallet.networkId && wallet.networkId.toString();
    const address = wallet.address;
    const connected = wallet.connected;
    const provider = wallet.provider;
    console.log('connected:', connected,'address:', address);
    return (
    <div className="header" >
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>WanCert</h1>
                    
                </Link>
                <button onClick={() => {
                        if (!connected) {
                        wallet.connect();
                        } else {
                        wallet.resetApp();
                        }
                }}>{connected ? "DISCONNECT" : "CONNECT WALLET"}</button>
                <div style={{color: "white"}}>Address: {address}</div>
            </div>
        </div>
    </div>
)};


const mapDispatchToProps = (dispatch)=>({
    startLogout: () => dispatch(startLogout())
});

const ConnectedHeader = connect(undefined, mapDispatchToProps)(Header);

export default ConnectedHeader;