import React, { useContext } from 'react';
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../App';
import './Style.css';

const Sell_3 = () => {

    let history = useHistory();
    const { account, setAccount } = useContext(UserContext);

    return (
        <div className="container boundary my-5">
            <div className="container p-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your IBAN account details to be credited"
                    onBlur={(e) => setAccount(e.target.value)}
                />

                <div className="mt-5">
                    <a href="#">
                        <h4>Where can I find my IBAN</h4>
                    </a>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/">
                                <Button variant="success" className="px-5 mt-5 mb-5 text-center">Go to Home</Button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Button variant="danger" className="px-5 mt-5" onClick={() => history.push("/sell_4")}>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sell_3;