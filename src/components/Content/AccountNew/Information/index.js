import React from 'react';

const Index = () => {
    return (
        <div className='col-sm-9'>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-header">
                        <h1 className="profile-title">Hồ sơ của tôi</h1>
                        <div className="profile-description">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                    </div>
                    <div className="profile-avatar">
                        <div className="profile-avatar-icon">
                            {/* Avatar icon ở đây */}
                        </div>
                        <input className="profile-upload-input" type="file" accept=".jpg,.jpeg,.png" />
                    </div>
                    <div className="profile-form">
                        <table className="profile-table">
                            <tbody>
                                <tr>
                                    <td className="profile-label">Username</td>
                                    <td className="profile-value" style={{ display: 'flex' }}>
                                        <div className="profile-info">dongduclan277</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="profile-label">Email</td>
                                    <td className="profile-value" style={{ display: 'flex' }}>
                                        <div className="profile-info">dongduclan277@gmail.com</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="profile-label">Phone number</td>
                                    <td className="profile-value" style={{ display: 'flex' }}>
                                        <div className="profile-info">0379382992</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="profile-label">Sex</td>
                                    <td className="profile-value" style={{ display: 'flex' }}>
                                        <div className="profile-info">Female</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="profile-label">Tuổi</td>
                                    <td className="profile-value" style={{ display: 'flex' }}>
                                        <div className="profile-info">18</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="profile-label" />
                                    <td className="profile-value">
                                        <div className='button-show-order'>
                                            <button type='button' >Change</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
