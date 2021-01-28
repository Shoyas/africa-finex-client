import React, { useContext } from 'react';
import { useId } from "react-id-generator";
import { Button } from "react-bootstrap";
import { UserContext } from '../App';
import { Link, useHistory } from 'react-router-dom';
import './Style.css';

const Buy_4 = () => {
    const [htmlId] = useId();
    let history = useHistory();
    const { finalWallet, selectedBank,   currency, finalWalletSell, token, account } = useContext(UserContext);
    
    console.log("finalWallet: ", finalWallet);
    console.log("selected Bank: ", selectedBank);
    console.log("currency: ", currency);
    console.log("finalWalletSell: ", finalWalletSell);
    console.log("Token: ", token);
    console.log("Account: ", account);


    const handleBuy = () => {
        const storingData = { finalWallet, currency: currency, SwapId: htmlId, selectedBank, IBAN: finalWallet };

        fetch("https://powerful-gorge-76371.herokuapp.com/buy", {
            method: "POST",
            body: JSON.stringify(storingData),
            headers: {
                "Content-type": "application/json"
            },
        })
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            alert("Successfully posted");
            history.push("/lastCommon")
        }
        });
    };

    return (
        <div className="container boundary my-5">
            <div className="container p-5">
                <h4 className="my-5">Transfers funds to the following account</h4>
                <div className="my-5">
                    <h3>{selectedBank}</h3>
                    <h3>Swap ID: {htmlId}</h3>
                </div>
                <h4>
                    As soon as the funds are received the transaction to your BSC wallet
                    will be made the following address.
                </h4>
                <h4 className="my-5">Wallet Address: <br/>{finalWallet}</h4>
                <a href="#" target="_blank" className="text-center">
                    <h4>Doubts? Discord or Telegram</h4>
                </a>
                <div className="text-center row">
                    <div className="col-md-6">
                        <Link to="/">
                            <Button variant="success" className="px-5 mt-5 mb-5 text-center">Go to Home</Button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Button variant="danger" className="px-5 mt-5 " onClick={handleBuy}>Done</Button>
                    </div>
                </div>
            </div>  
        </div>
        
    );
};

export default Buy_4;
