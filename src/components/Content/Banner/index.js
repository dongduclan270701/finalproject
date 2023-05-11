import React from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    return (
        <div id="sticky-banner">
            <div id="sticky-banner-target">
                <div className="medium">
                    <NavLink href="" className="left">
                        <img src='//theme.hstatic.net/1000026716/1000440777/14/stk-bn-left.png?v=34252' alt="" width={100} /></NavLink>
                    <NavLink href="" className="right">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/stk-bn-right.png?v=34252" alt="" width={100} /></NavLink>
                </div>
                <div className="large">
                    <NavLink href="" className="left">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/stk-bn-left.png?v=34252" alt="" width={150} /></NavLink>
                    <NavLink href="" className="right">
                        <img src="//theme.hstatic.net/1000026716/1000440777/14/stk-bn-right.png?v=34252" alt="" width={150} /></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Index;
