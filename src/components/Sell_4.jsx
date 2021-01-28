import React, { useContext, useState } from 'react';
import { Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import './Style.css';

const Sell_4 = () => {

    let history = useHistory();
    const { account, finalWalletSell, token } = useContext(UserContext);
    const [txid, setTxid] = useState("");

    const postSell = () => {
        const storingData = { account, finalWalletSell, token, txid };

        fetch("https://powerful-gorge-76371.herokuapp.com/sell", {
            method: "POST",
            body: JSON.stringify(storingData),
            headers: {
                "Content-type": "application/json"
            },
        })
        .then((response) => response.json())
        .then((data) => {
        if (data) {
            alert("Successfully sell");
            history.push("/lastCommon");
        }
        });
    };

    return (
        <div className="container boundary my-5">
            <div className="container p-5">
                <h4 className="my-5">
                    Transfer your tokens {token} to the following BSN (Biance smart chain)
                    address and enter the result in a TXid
                </h4>
                <h4>The Account: <br/> {account}</h4>
                <input
                    type="text"
                    className="form-control my-5"
                    placeholder="TXid (mandatory info)"
                    onBlur={(e) => setTxid(e.target.value)}
                />
                
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/">
                            <Button variant="success" className="px-5 mt-5 mb-5 text-center">Go to Home</Button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Button variant="danger" className="px-5 mt-5 mb-5 text-center" onClick={postSell}>Done</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell_4;

