import React, { useContext } from 'react';
import { Button } from "react-bootstrap";
import WAValidator from "wallet-address-validator";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../App';
import './Style.css';

const Buy_2 = () => {

    const [wallet, setWallet] = useState("");
    const { finalWallet, setFinalWallet } = useContext(UserContext);
    let history = useHistory();

    const handleValidation = () => {
        const validAddress = WAValidator.validate(wallet, "BTC");
        if (validAddress) {
            history.push("/buy_3");
            setFinalWallet(wallet);
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
                    placeholder="Enter your BSC wallet address"
                />
                <h4>You will receive your TAOA in this address</h4>

                <h4 className="text-danger mt-5">
                    Pay close attention mistakes will make you loose all your assets and
                    there is nothing we can do to help
                </h4>
            </div>
            <a
                href="https://www.binance.org/en/smartChain"
                target="_blank"
                className="text-center"
            >
                <h4>Don't have a BSC wallet..?</h4>
            </a>
            <div className="text-center py-5 row">
                <div className="col-md-6">
                    <Link to="/">
                        <Button variant="success" className="px-5 mt-5 text-center">Go to Home</Button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Button variant="danger" className="px-5 mt-5 text-center" onClick={handleValidation}>Next</Button>
                </div>

            </div>
        </div>
    );
};

export default Buy_2;

