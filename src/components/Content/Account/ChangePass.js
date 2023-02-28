import axios from 'axios';
import React, { useState } from 'react';

const ChangePass = () => {
    const [inputForm, setInputForm] = useState({ password: "", token: localStorage.getItem('token') })
    const getStateInputForm = async () => {
        await axios.post(`http://localhost:9999/api/change-password`, inputForm)
            .then(result => {
                console.log(result)
                
                if (result.data.status === "ok") {
                    alert("Success")
                } else {
                    alert(result.data.error)
                }
            }
            )
            .catch(error => console.log(error))

    }
    return (
        <div>
            <div>Form change password</div>
            New password:
            <input type="password" placeholder='Password' onChange={(e) => setInputForm((inputForm) => ({ ...inputForm, password: e.target.value }))} />
            <br /><br />
            <button type='submit' onClick={getStateInputForm}>Submit</button>
            <br />
        </div>
    );
}

export default ChangePass;
