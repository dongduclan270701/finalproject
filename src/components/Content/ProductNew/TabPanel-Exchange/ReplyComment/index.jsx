import React, { useState } from 'react';
import { fetchReply } from 'Apis'
import Swal from 'sweetalert2'
import { Dropdown } from 'react-bootstrap';
import { fetchDeleteReply } from 'Apis'
import unknow from 'assets/images/unkown.jpg'
const Index = ({ comment, product }) => {
    const [selectReply, setSelectReply] = useState(false)
    const [getComment, setGetComment] = useState(comment)
    const [reply, setReply] = useState({
        idReply: "",
        image: JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))[4],
        username: JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))[1],
        email: JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'))[0],
        date: "",
        time: "",
        content: "",
        _destroy: false
    })
    const handleChangeReply = (e) => {
        setReply({ ...reply, content: e.target.value })
    }
    const handleSubmitReply = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const time = `${hours}:${minutes}`;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const today = `${year}-${month}-${day}`;
        const newReply = { ...reply, date: today, time: time }
        const newComment = { ...getComment, reply: [...getComment.reply, newReply] }
        if (JSON.parse(localStorage.getItem('user'))) {
            if (reply.content === "") {
                Swal.fire({
                    title: "Error sent!",
                    text: 'Please fill your answer or question!',
                    icon: 'warning',
                    confirmButtonText: 'OK!'
                })
            } else {
                fetchReply({ idChat: comment.idChat, reply: newReply, product: product })
                    .then(result => {
                        setGetComment(newComment)
                        setReply({ ...reply, content: "" })
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
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                    })
            }
        } else {
            Swal.fire({
                title: 'You need to login!',
                text: 'Please log in to your account to be able to add products to your cart',
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        }

    }
    const handleDeleteReply = (idReply) => {
        const updatedReply = getComment.reply.map(item => {
            if (item.idReply === idReply) {
                return {
                    ...item,
                    _destroy: true
                };
            }
            return item;
        });
        Swal.fire({
            title: 'Do you want this action?',
            showCancelButton: true,
            icon: 'question',
            confirmButtonText: 'Accept',
            cancelButtonText: 'Decline',
        }).then((result) => {
            if (result.isConfirmed) {
                setGetComment({ ...getComment, reply: updatedReply })
                fetchDeleteReply({ idChat: getComment.idChat, idReply: idReply, product: product })
                    .then(result => {
                        Swal.fire({
                            title: "Remove!",
                            text: "It looks like you remove reply successfully!",
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

            }
        })

    }
    return (
        <>{getComment.reply.length > 0 ? <div className='border-left-reply'>
        </div> : null}
            {getComment.reply.map((replyComment, index) => {
                return replyComment._destroy === false && <div className="reply-container" key={index}>
                    {JSON.parse(localStorage.getItem('user')) && replyComment.email === JSON.parse(localStorage.getItem('user'))[0] ? <div className="comment">
                        <div className="comment-content">
                            <div className='row' style={{ margin: "0 45px" }}>
                                <div className='border-left-chat'>
                                </div>
                                <div style={{ padding: "0px 15px" }}>
                                    <img src={replyComment.image} alt="" style={{ width: "60px", borderRadius: "50%" }} />
                                </div>
                                <div>
                                    <div className="comment-author">You</div>
                                    <div className="comment-timestamp">{replyComment.time + " " + replyComment.date}</div>
                                    {replyComment.content}
                                </div>
                                <Dropdown className="comment-options">
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ padding: 0 }}>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item className='option-content' onClick={() => handleDeleteReply(replyComment.idReply)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            {comment.reply.length - 1 === index && selectReply === false && <button onClick={setSelectReply} className="button-reply" style={{ margin: "0 90px" }}>Reply</button>}
                        </div>
                    </div> :
                        <div className="comment">
                            <div className="comment-content">
                                <div className='row' style={{ margin: "0 45px" }}>
                                    <div className='border-left-chat'>
                                    </div>
                                    <div style={{ padding: "0px 15px" }}>
                                        <img src={replyComment.image} alt="" style={{ width: "60px", borderRadius: "50%" }} />
                                    </div>
                                    <div>
                                        <div className="comment-author">{replyComment.username + " ( " + replyComment.email + " ) "}</div>
                                        <div className="comment-timestamp">{replyComment.time + " " + replyComment.date}</div>
                                        {replyComment.content}
                                    </div>
                                </div>
                                {comment.reply.length - 1 === index && selectReply === false && <button onClick={setSelectReply} className="button-reply" style={{ margin: "0 90px" }}>Reply</button>}
                            </div>
                        </div>
                    }
                </div>
            })}

            {comment.reply.length === 0 && selectReply === false && <button onClick={setSelectReply} className="button-reply" style={{ margin: "0 90px" }}>Reply</button>}
            {selectReply && <div className="comment-container">
                <div className="row comment-form" style={{ margin: "0 90px" }}>
                    <div className='border-left-reply-comment'>
                    </div>
                    <div className="row comment-container">
                        <img src={JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user'))[4] : unknow} alt="" style={{ width: "60px", borderRadius: "50%", margin: "0px 15px" }} />
                        <form>
                            <div className="input-field" style={{ margin: "0", width: '300px' }}>
                                <input style={{borderRadius:'15px 0 0 15px'}} onChange={e => handleChangeReply(e)} value={reply.content} type="text" placeholder='Enter your comment here' />
                                <label>Reply Comment</label>
                            </div>
                        </form>
                        <button style={{borderRadius:'0 15px 15px 0'}} onClick={handleSubmitReply}>Post</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Index;
