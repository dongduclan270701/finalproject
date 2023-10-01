import React, { useState, useEffect, memo } from 'react';
import Comment from './Comment'
import { fetchChat } from 'Apis'
import Swal from 'sweetalert2'
import unknow from 'assets/images/unkown.jpg'
const Index = ({ product }) => {
    const [chat, setChat] = useState([
    ])
    useEffect(() => {
        setChat(product.chat)
    }, [product])
    const [chatting, setChatting] = useState({
        idChat: "",
        image: JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))[4],
        username: JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))[1],
        email: JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))[0],
        date: "",
        time: "",
        content: "",
        reply: [],
        _destroy: false
    })
    const handleChangeChat = (e) => {
        setChatting({ ...chatting, content: e.target.value })
    }
    const handleSubmitChat = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const time = `${hours}:${minutes}`;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const today = `${year}-${month}-${day}`;
        const chat = { ...chatting, date: today, time: time }
        const newProduct = { ...product, chat: chat }
        if (JSON.parse(localStorage.getItem('user'))) {
            fetchChat(newProduct)
                .then(result => {
                    setChat(result.chat)
                    setChatting({ ...chatting, content: "" })
                    Swal.fire({
                        title: "Successfully sent!",
                        text: 'You have successfully submitted a product review!',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                })
                .catch(error => {
                    console.log(error)
                    Swal.fire({
                        title: "Error sent!",
                        text: 'The connection to the server seems to have a problem!',
                        icon: 'warning',
                        confirmButtonText: 'OK!'
                    })
                })
        } else {
            Swal.fire({
                title: 'You need to login!',
                text: 'Please log in to your account to be able to add products to your cart',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }

    }
    const handleSetChatComment = (data) => {
        const updatedComment = chat.map(item => {
            if (item.idChat === data.idChat) {
                return {
                    ...item,
                    _destroy: data._destroy
                };
            }
            return item;
        });
        setChat(updatedComment)
    }
    return (
        <div role="tabpanel" className="tab-pane" id="tabExchange">
            <div className="row comment-container">
                <img src={JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user'))[4] : unknow} alt="" style={{ width: "60px", borderRadius: "50%", margin: "0px 15px" }} />
                <form>
                    <div className="input-field" style={{ margin: "0", width:'300px' }}>
                        <input style={{borderRadius:'15px 0 0 15px'}} onChange={e => handleChangeChat(e)} value={chatting.content} type="text" placeholder='Enter your comment here'/>
                        <label>Comment</label>
                    </div>
                </form>
                <button style={{borderRadius:'0 15px 15px 0'}} onClick={handleSubmitChat}>Post</button>
            </div>
            <br />
            {chat.length > 0 ? chat.map((comment, index) => {
                return comment._destroy === false && <Comment onHandleSetChatComment={handleSetChatComment} comment={comment} product={product} key={index}
                />
            }) :
                "chưa có comment nào"}

        </div>
    );
}

export default memo(Index);
