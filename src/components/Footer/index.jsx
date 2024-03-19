import React from 'react';
import { NavLink } from 'react-router-dom';
import 'assets/scss/Footer/footer.css'
import ship1 from 'assets/images/ship_1.webp'
import ship2 from 'assets/images/ship_3.webp'
import ship3 from 'assets/images/ship_4.webp'
const Index = () => {

    return (
        <div className='footer'>
            <div className='footer-content row'>
                <div className="col-md-3 ">
                    <div className="moduletable">
                        <h3 className='play-bold'>ABOUT KTECH</h3>
                        <div className="custom">
                            <table style={{ width: '260px' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '50px', fontSize: '14px', paddingBottom: '5px' }}>Introduce</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50px', fontSize: '14px' }}>Hire</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                        </div>
                        <h3 className='play-bold'>Information</h3>
                        <div className="custom">
                            <table style={{ width: '260px' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '50px', fontSize: '14px', paddingBottom: '5px' }}>Shop system</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '50px', fontSize: '14px' }}>Service Center</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="moduletable">
                        <h3 className='play-bold'>POLICY</h3>
                        <div className="custom">
                            <table style={{ width: '260px' }}>
                                <tbody>
                                    <tr>
                                        <td className='play-bold' style={{ width: '50px', fontSize: '14px', paddingBottom: '5px' }}><div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Warranty Policy</NavLink></div></td>
                                    </tr>
                                    <tr>
                                        <td className='play-bold' style={{ width: '50px', fontSize: '14px' }}><div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Payment policy</NavLink></div></td>
                                    </tr>
                                    <tr>
                                        <td className='play-bold' style={{ width: '50px', fontSize: '14px', paddingBottom: '5px' }}><div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Delivery policy</NavLink></div></td>
                                    </tr>
                                    <tr>
                                        <td className='play-bold' style={{ width: '50px', fontSize: '14px' }}><div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Privacy Policy</NavLink></div></td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="moduletable">
                        <h3 className='play-bold'>HOTLINE</h3>
                        <div className="custom">
                            <table style={{ width: '260px' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '60px', fontSize: '14px', paddingBottom: '5px' }}>Call to buy:</td>
                                        <td style={{ width: '105px', fontSize: '14px', paddingBottom: '5px' }}><strong className='play-bold'>1800 6975</strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '60px', fontSize: '14px', paddingBottom: '5px' }}>Support:</td>
                                        <td style={{ width: '105px', fontSize: '14px', paddingBottom: '5px' }}><strong className='play-bold'>1800 6173</strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '60px', fontSize: '14px' }}>Email:</td>
                                        <td style={{ width: '105px', fontSize: '14px' }}><strong className='play-bold'>kass2k1@gmail.com</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="moduletable">
                        <h3 className='play-bold'>SHIPPING UNIT</h3>
                        <div className="custom">
                            <img alt='' src={ship1} style={{ maxWidth: '85px', marginRight: 5 }} />
                            <img alt='' src={ship2} style={{ maxWidth: '85px', marginRight: 5 }} />
                            <img alt='' src={ship3} style={{ maxWidth: '85px' }} />
                            <hr style={{border: '1px solid rgba(255, 255, 255, 0.5)'}}/>
                        </div>
                        <NavLink to="" rel="nofollow"><img alt='' src="https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png" style={{ maxWidth: '150px' }} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
