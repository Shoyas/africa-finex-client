import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Buy_1 from './components/Buy_1';
import Buy_2 from './components/Buy_2';
import Buy_3 from './components/Buy_3';
import Buy_4 from './components/Buy_4';

import Sell_1 from './components/Sell_1';
import Sell_2 from './components/Sell_2';
import Sell_3 from './components/Sell_3';
import Sell_4 from './components/Sell_4';
import LastCommon from './components/LastCommon';

export const UserContext = createContext();

const App = () => {

    const [currency, setCurrency] = useState(null);
    const [finalWallet, setFinalWallet] = useState("");
    const [finalWalletSell, setFinalWalletSell] = useState("");
    const [token, setToken] = useState("");
    const [account, setAccount] = useState("");
    const [selectedBank, setSelectedBank] = useState("Chose Your Bank");

    return (
        <UserContext.Provider
            value={{
                currency, setCurrency,
                finalWallet, setFinalWallet,
                finalWalletSell, setFinalWalletSell,
                token, setToken,
                account, setAccount,
                selectedBank, setSelectedBank,
            }}
        >
            <Router>
                <Switch>
                    {/* Both of Buy and Sell */}
                    <Route exact path="/">
                        <div className="container-fluid">
                            <h2 className="text-center mt-5">Africa Finex Gateway</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <Buy_1/>
                                </div>
                                <div className="col-md-6">
                                    <Sell_1/>
                                </div>
                            </div>
                        </div>
                    </Route>
                    
                    {/* For Buy components */}
                    <Route path="/buy_1">
                        <Buy_1/>
                    </Route>
                    <Route path="/buy_2">
                        <Buy_2/>
                    </Route>
                    <Route path="/buy_3">
                        <Buy_3/>
                    </Route>
                    <Route path="/buy_4">
                        <Buy_4/>
                    </Route>
                    
                    {/* For sell components */}
                    <Route path="/sell_1">
                        <Sell_1/>
                    </Route>
                    <Route path="/sell_2">
                        <Sell_2/>
                    </Route>
                    <Route path="/sell_3">
                        <Sell_3/>
                    </Route>
                    <Route path="/sell_4">
                        <Sell_4/>
                    </Route>

                    {/* Both of Buy and Sell after storing in Database*/}
                    <Route path="/lastCommon">
                        <LastCommon/>
                    </Route>
                
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;