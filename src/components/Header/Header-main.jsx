import React, { useState, useEffect } from 'react';

import Advertise from 'components/Header/Advertise-Banner'
import Controller from 'components/Header/Controller-Header'
import Policy from 'components/Header/Menu-Policy'

const Index = () => {
    
    return (
        // <div className='Header-Main'>
        //     <div className='Advertise-Banner'>
        //         <Advertise />
        //     </div>
        //     <div className='Controller-Header'>
        //         <Controller />
        //     </div>

        //     <div className='Menu-Policy'></div>
        // </div>
        <>
            <div className="header">
                <div className="fix-xxx">
                    <Advertise/>
                    <Controller/>
                    <Policy/>
                </div>
            </div>
        </>
    );
}

export default Index;
