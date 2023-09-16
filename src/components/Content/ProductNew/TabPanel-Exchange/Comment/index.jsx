import React, { useState } from 'react';
import ReplyComment from '../ReplyComment'
import { Dropdown } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { fetchDeleteComment } from 'Apis';
const Index = ({ comment, product, onHandleSetChatComment }) => {
    const handleDeleteComment = () => {
        
        Swal.fire({
            title: 'Do you want this action?',
            showCancelButton: true,
            icon: 'question',
            confirmButtonText: 'Accept',
            cancelButtonText: 'Decline',
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetchDeleteComment({ product: product, idChat: comment.idChat })
                    .then(result => {
                        onHandleSetChatComment({ ...comment, _destroy: true })
                        Swal.fire({
                            title: "Remove!",
                            text: "It looks like you remove comment successfully!",
                            icon: 'success',
                            confirmButtonText: 'OK!'
                        })
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire({
                            title: "Error sent!",
                            text: 'The connection to the server seems to have a problem!',
                            icon: 'error',
                            confirmButtonText: 'OK!'
                        })
                    })
                
            }
        })
        //sent request change _destroy: true
    }
    return (
        <div className="comment-container">
            {/* Comment 1 */}
            {JSON.parse(localStorage.getItem('user')) && comment.email === JSON.parse(localStorage.getItem('user'))[0] ?
                <div className="comment">
                    <div className="comment-content">
                        <div className='row' style={{ margin: "0" }}>
                            <div style={{ padding: "0px 15px" }}>
                                <img src={comment.image} alt="" style={{ width: "60px", borderRadius: "50%" }} />
                            </div>
                            <div>
                                <div className="comment-author">You</div>
                                <div className="comment-timestamp">{comment.time + " " + comment.date}</div>
                                {comment.content}
                            </div>

                            <Dropdown className="comment-options">
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleDeleteComment()}>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <ReplyComment comment={comment} product={product} />
                </div> : <div className="comment">
                    <div className="comment-content">
                        <div className='row' style={{ margin: "0" }}>
                            <div style={{ padding: "0px 15px" }}>
                                <img src={comment.image} alt="" style={{ width: "60px", borderRadius: "50%" }} />
                            </div>
                            <div>
                                <div className="comment-author">{comment.username + " ( " + comment.email + " ) "}</div>
                                <div className="comment-timestamp">{comment.time + " " + comment.date}</div>
                                {comment.content}
                            </div>
                        </div>
                    </div>
                    <ReplyComment comment={comment} product={product} />
                </div>}

            <br />
        </div>
    );
}

export default Index;
