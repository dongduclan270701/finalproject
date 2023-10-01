import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
    updatePasswordUser
} from 'Apis'
import Swal from 'sweetalert2'
const Index = (props) => {
    const { user, handleChangeUserInformation} = props
    const [inputForm, setInputForm] = useState({ oldPassword: '', newPassword: '', reNewPassword: '' })
    const handleChangePassword = (e) => {
        const { name, value } = e.target
        setInputForm({ ...inputForm, [name]: value })
    }
    const handleSubmit = () => {
        const re = /[A-Z]/
        if (inputForm.oldPassword === '') {
            Swal.fire({
                title: "Ops!",
                text: "Enter your password!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (inputForm.newPassword.length < 8 || !re.test(inputForm.newPassword)) {
            Swal.fire({
                title: "Ops!",
                text: "New password must be at least 8 characters or more and contain capital letters!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (inputForm.newPassword !== inputForm.reNewPassword) {
            Swal.fire({
                title: "Ops!",
                text: "Renew password incorrect!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else {
            Swal.fire({
                title: 'Updating...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            updatePasswordUser(user._id, {...user, oldPassword: inputForm.oldPassword, newPassword: inputForm.newPassword})
                .then(result => {
                    if(result === 'Password incorrect'){
                        Swal.fire({
                            title: "Ops!",
                            text: "Password incorrect!",
                            icon: 'warning',
                            confirmButtonText: 'OK!'
                        })
                    } else {
                        handleChangeUserInformation(result)
                        setInputForm({ oldPassword: '', newPassword: '', reNewPassword: '' })
                        Swal.fire({
                            title: "Successfully!",
                            text: "Updated new information!",
                            icon: 'success',
                            confirmButtonText: 'OK!'
                        })
                    }
                })
                .catch(error => {
                    Swal.fire({
                        title: "Ops!",
                        text: "Error connect to server!",
                        icon: 'error',
                        confirmButtonText: 'OK!'
                    })
                    console.log(error)
                })
        }
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
                                            <input name='oldPassword' type="password" onChange={e => handleChangePassword(e)} value={inputForm.oldPassword} required />
                                            <label>Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile-content'>
                                    <div className="profile-label">New password: </div>
                                    <div className="profile-value">
                                        <div className="input-field">
                                            <input name='newPassword' type="password" onChange={e => handleChangePassword(e)} value={inputForm.newPassword} required />
                                            <label>New password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='profile-content'>
                                    <div className="profile-label">Renew password: </div>
                                    <div className="profile-value">
                                        <div className="input-field">
                                            <input name='reNewPassword' type="password" onChange={e => handleChangePassword(e)} value={inputForm.reNewPassword} required />
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
