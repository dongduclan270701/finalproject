import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
const Index = (props) => {
    const handleSubmit = () => {

    }
    return (
        <div className='col-sm-9'>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-header">
                        <h1 className="profile-title">Change password</h1>
                        <div className="profile-description">Change your new password to easily rise security</div>
                    </div>
                    <div className="profile-form">
                        <div className="profile-table">
                            <form>
                                <div className='profile-content'>
                                    <div className="profile-label">Password: </div>
                                    <div className="profile-value">
                                        <div className="input-field">
                                            <input name='password' type="password" value={''} required />
                                            <label>Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile-content'>
                                    <div className="profile-label">New password: </div>
                                    <div className="profile-value">
                                        <div className="input-field">
                                            <input name='newPassword' type="password" value={''} required />
                                            <label>New password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile-content'>
                                    <div className="profile-label">Renew password: </div>
                                    <div className="profile-value">
                                        <div className="input-field">
                                            <input name='reNewPassword' type="password" value={''} required />
                                            <label>Renew password</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='button-show-order'>
                        <button type='button' onClick={handleSubmit} >Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
