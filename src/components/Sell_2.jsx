import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { Button } from "react-bootstrap";
import WAValidator from "wallet-address-validator";
import { Link, useHistory } from 'react-router-dom';
import './Style.css';

const Sell_2 = () => {


    const [wallet, setWallet] = useState("");
    const { finalWalletSell, setFinalWalletSell } = useContext(UserContext);
    let history = useHistory();

    const isValid = () => {
        const valid = WAValidator.validate(wallet, "BTC");
        if (valid) {
            history.push("/sell_3");
            setFinalWalletSell(wallet);
        } 
        else {
            alert("Your given address is invalid");
        }
    };

    return (
        <div className="container boundary my-5">
            <div className="container p-5">
                <input
                    onBlur={(e) => setWallet(e.target.value)}
                    className="form-control mb-5"
                    type="text"
                    placeholder="BSC wallet address"
                />

                <h4 className="mt-5">
                    If for some reason we can not proceed with your sale (Which is rare)
                    we will completely return your assets. Please provide a BSC valid
                    wallet address that you have access to. Pay close attention to not
                    input any incorrect information.
                </h4>
            </div>
            <a
                href="https://www.binance.org/en/smartChain"
                target="_blank"
                className="text-center"
            >
                <h4>Don't have a BSC wallet yet?</h4>
            </a>
            <div className="text-center py-5 row">
                <div className="col-md-6">
                    <Link to="/">
                        <Button variant="success" className="px-5 mt-5 mb-5 text-center">Go to Home</Button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Button variant="danger" className="px-5 mt-5 mb-5 text-center" onClick={isValid}>Next</Button>
                </div>
            </div>
        </div>
    );
};

export default Sell_2;