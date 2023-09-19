import React, { useState, useEffect } from 'react';
import {
    updateUser
} from 'Apis'
import Swal from 'sweetalert2'
const Index = (props) => {
    const { user, handleChangeUserInformation } = props
    const [change, setChange] = useState(false)
    const [informationUser, setInformationUser] = useState(null)
    const [newInformationUser, setNewInformationUser] = useState(null)
    const handleChange = () => {
        setChange(!change)
        setNewInformationUser(informationUser)
    }
    const handleChangeAfterUpdate = () => {
        setChange(!change)
    }
    useEffect(() => {
        setInformationUser(user)
        setNewInformationUser(user)
    }, [user]);
    const handleChangeInformation = (e) => {
        const { name, value } = e.target
        setNewInformationUser({ ...newInformationUser, [name]: value })
    }
    const handleSubmitUpdate = () => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if (JSON.stringify(informationUser) === JSON.stringify(newInformationUser)) {
            Swal.fire({
                title: "Ops!",
                text: "You must be change information!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (!re.test(newInformationUser.phoneNumber)) {
            Swal.fire({
                title: "Ops!",
                text: "Phone number incorrect format!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (newInformationUser.age * 1 === 0) {
            Swal.fire({
                title: "Ops!",
                text: "Age incorrect format!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }
        else if (newInformationUser.sex === 'null') {
            Swal.fire({
                title: "Ops!",
                text: "Choose your sex!",
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
            updateUser(informationUser._id, newInformationUser)
                .then(result => {
                    handleChangeAfterUpdate()
                    setInformationUser(result)
                    handleChangeUserInformation(result)
                    Swal.fire({
                        title: "Successfully!",
                        text: "Updated new information!",
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
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
                {informationUser ? <div className="profile-content">
                    <div className="profile-header">
                        <h1 className="profile-title">My profile</h1>
                        <div className="profile-description">Manage profile information for account security</div>
                    </div>
                    <div className="profile-avatar">
                        <div className="profile-avatar-icon">
                            <img src={JSON.parse(localStorage.getItem('user'))[4] ? JSON.parse(localStorage.getItem('user'))[4] : null} style={{ borderRadius: '50%' }} alt='' />
                        </div>
                    </div>
                    <div className="profile-form">
                        <div className="profile-table">
                            {change ?
                                <form>
                                    <div className='profile-content'>
                                        <div className="profile-label">Email: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.email}</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Username: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='username' onChange={e => handleChangeInformation(e)} type="text" value={newInformationUser.username} required />
                                                <label>New Username</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Phone number: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='phoneNumber' onChange={e => handleChangeInformation(e)} type="number" value={newInformationUser.phoneNumber} required />
                                                <label>Phone Number</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Address: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='address' type="text" onChange={e => handleChangeInformation(e)} value={newInformationUser.address} required />
                                                <label>Address</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Age: </div>
                                        <div className="profile-value">
                                            <div className="input-field">
                                                <input name='age' type="number" onChange={e => handleChangeInformation(e)} value={newInformationUser.age} required />
                                                <label>New Age</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Sex: </div>
                                        <div className="profile-value ">
                                            <div className="select-field">
                                                <select onChange={(e) => handleChangeInformation(e)} value={newInformationUser.sex} className="field-input" id="customer_shipping_province" name="sex">
                                                    <option data-code="null" value="null">
                                                        Select Sex </option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                :
                                <form>
                                    <div className='profile-content'>
                                        <div className="profile-label">Email: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.email}</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Username: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.username}</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Phone number: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.phoneNumber}</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Address: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.address}</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Sex: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.sex === 'null' ? '' : informationUser.sex}</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Age: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.age}</div>
                                        </div>
                                    </div>
                                    <div className='profile-content'>
                                        <div className="profile-label">Created Date: </div>
                                        <div className="profile-value">
                                            <div className="profile-info">{informationUser.createdDate}</div>
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                    <div className='button-show-order'>
                        {change ?
                            <div style={{ display: 'flex' }}>
                                <button type='button' onClick={handleSubmitUpdate} style={{ margin: '10px' }}>Save</button>
                                <button type='button' onClick={handleChange} style={{ margin: '10px' }}>Close</button>
                            </div>
                            :
                            <button type='button' onClick={handleChange} >Update</button>
                        }
                    </div>
                </div> : <div style={{ width: "100%", display: 'flex' }}><div class="lds-hourglass"></div></div>}

            </div>
        </div>
    );
}

export default Index;
