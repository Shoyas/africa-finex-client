import React, { useContext } from 'react';
import {
    Dropdown,
    SplitButton,
    Button,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import './Style.css';

const Buy_3 = () => {

    const {selectedBank, setSelectedBank} = useContext(UserContext);

    const handleChange = (e) => {
        setSelectedBank(e);
    };

    return (
        <div className="container boundary my-5">
            <div className="container p-5">
                <div className="my-5">
                <SplitButton
                    key={"down"}
                    id={`dropdown-button-drop-${"down"}`}
                    drop={"down"}
                    variant="secondary"
                    title={selectedBank}
                >
                    <Dropdown.Item onSelect={handleChange} eventKey={"Bank_1"}>
                        Bank_1
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={handleChange} eventKey={"Bank_2"}>
                        Bank_2
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={handleChange} eventKey={"Bank_3"}>
                        Bank_3
                    </Dropdown.Item>
                    <Dropdown.Item onSelect={handleChange} eventKey={"Bank_4"}>
                        Bank_4
                    </Dropdown.Item>
                </SplitButton>
                </div>
                <h5 className="mb-5">
                    Transfers between banks are usually faster. If available give
                    preference to your local bank and the system will automatically find
                    th`e best P2P for you.
                </h5>
                <a href="#" target="_blank" className="ml-5">
                    <h5>How long does it usually take?</h5>
                </a>
                <div className="row">
                    
                    <div className="col-md-6">
                        <Link to="/">
                            <Button variant="success" className="px-5 mt-5 text-center">Go to Home</Button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/buy_4">
                            <Button variant="danger" className="px-5 mt-5 text-center">Next</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy_3;


            