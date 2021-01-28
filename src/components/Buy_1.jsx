import React, { useContext, useEffect, useState } from 'react';
import {
    Dropdown,
    SplitButton,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../App';
import './Style.css';

const Buy_1 = () => {

    const {currency, setCurrency} = useContext(UserContext);
    const [finalWallet, setFinalWallet] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
          .then((res) => res.json())
          .then((data) => setFinalWallet(data));
    }, [currency]);
    
    const handleFinalWallet = (eventKey) => {
        setCurrency(eventKey);
    };

    return (
        <div className="container boundary my-5">
            <div className="container p-5">
                <h4>Stablecoin gateway - BUY</h4>

                <div className="my-5">
                    <SplitButton
                        key={"down"}
                        id={`dropdown-button-drop-${"down"}`}
                        drop={"down"}
                        variant="primary"
                        title={currency || "Select Your Coin"}
                        
                    >
                        {
                            finalWallet.map((cr) => (
                                <Dropdown.Item onSelect={handleFinalWallet} key={cr.cioc} eventKey={cr.currencies[0].code}>
                                    {cr.name} - ({cr.currencies[0].code})
                                </Dropdown.Item>
                            ))
                        }
                    </SplitButton>
                </div>
                <div>
                    <label htmlFor="quantity">
                        <input type="number" min="0" placeholder="Quantity" />
                    </label>
                    </div>
                    <div className="mt-5">
                    <h4>Total Cost @Price AOA/TAOA</h4>
                </div>
                <Link to="/buy_2">
                    <Button variant="danger" className="px-5 mt-5 text-center">Next</Button>
                </Link>
            </div>
        </div>
    );
};

export default Buy_1;