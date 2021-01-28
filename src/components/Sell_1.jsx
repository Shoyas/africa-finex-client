import React, { useContext } from 'react';
import {
    Dropdown,
    SplitButton,
    Button,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
import { UserContext } from '../App';
import './Style.css';

const Sell_1 = () => {

    const { token, setToken } = useContext(UserContext);
    const handleChange = (e) => {
        setToken(e);
    };

    return (
        <div className="container boundary mt-5">
            <div className="container mt-5">
                <h4 className="my-5">Stablecoin gateway - Sell</h4>
                <SplitButton
                    key={"down"}
                    id={`dropdown-button-drop-${"down"}`}
                    drop={"down"}
                    variant="warning"
                    title={token || "Choose a token"}
                >
                    <Dropdown.Item onSelect={handleChange} eventKey={"Token_1"}>
                        Token_1
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={handleChange} eventKey={"Token_2"}>
                        Token_2
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={handleChange} eventKey={"Token_3"}>
                        Token_3
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={handleChange} eventKey={"Token_4"}>
                        Token_4
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={handleChange} eventKey={"Token_5"}>
                        Token_5
                    </Dropdown.Item>
                </SplitButton>
                
                <div className="mt-5">
                    <label htmlFor="quantity">
                        <input type="number" min="0" placeholder="Quantity" />
                    </label>
                </div>
                <div className="mt-5">
                    <h4>You will get X AOA @Preco AOA/TAOA</h4>
                </div>
                
                <Link to="/sell_2">
                    <Button variant="danger" className="px-5 mt-5 mb-5 text-center">
                        Next
                    </Button>
                </Link>
                
            </div>  
        </div>
    );
};

export default Sell_1;