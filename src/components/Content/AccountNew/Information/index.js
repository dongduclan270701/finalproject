import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
const Index = (props) => {
    const [change, setChange] = useState(false)
    const handleChange = () => {
        setChange(!change)
    }
    return (
        <div className='col-sm-9'>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-header">
                        <h1 className="profile-title">My profile</h1>
                        <div className="profile-description">Manage profile information for account security</div>
                    </div>
                    <div className="profile-avatar">
                        <div className="profile-avatar-icon">
                            <img src={JSON.parse(localStorage.getItem('user'))[4] ? JSON.parse(localStorage.getItem('user'))[4] : null} style={{ borderRadius: '50%' }} alt='' />
                        </div>
                        {/* <input className="profile-upload-input" type="file" accept=".jpg,.jpeg,.png" /> */}
                    </div>
                    <div className="profile-form">
                        <div className="profile-table">
                            {change ?
                                <form>
                                    <div className='profile-content'>
                                        <div className="profile-label">Email: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">dongduclan277@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Username: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='username' type="text" value={'1'} required />
                                                <label>New Username</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Phone number: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='phoneNumber' type="tel" value={'2'} required />
                                                <label>Phone Number</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Address: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='address' type="text" value={'3'} required />
                                                <label>Address</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Sex: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='sex' type="text" value={'4'} required />
                                                <label>New Sex</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Age: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='age' type="number" value={'4'} required />
                                                <label>New Age</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                :
                                <form>
                                    <div className='profile-content'>
                                        <div className="profile-label">Email: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">dongduclan277@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Username: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">dongduclan277</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Phone number: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">0379382992</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Address: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">dongduclan277@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Sex: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">Female</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Age: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">18</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Created Date: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">dongduclan277@gmail.com</div>
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                    <div className='button-show-order'>
                        {change ?
                            <div style={{display:'flex'}}>
                                <button type='button' onClick={handleChange} style={{margin: '10px'}}>Save</button>
                                <button type='button' onClick={handleChange} style={{margin: '10px'}}>Close</button>
                            </div>
                            :
                            <button type='button' onClick={handleChange} >Update</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
