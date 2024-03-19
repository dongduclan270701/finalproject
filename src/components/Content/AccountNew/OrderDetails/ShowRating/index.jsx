import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import GoodsReview from 'components/Content/AccountNew/OrderDetails/ShowRating/GoodsReview'
import 'assets/scss/Content/Goods/goods-detail.scss'
import Swal from 'sweetalert2'
import { fetchRatingOrder } from 'Apis'
import Goods from 'components/Content/AccountNew/OrderDetails/ShowRating/GoodsReview'
const Index = (props) => {
    const { toggleShowRate, onHandleToggleShowRate, order } = props
    const [listGoodsReview, setListGoodsReview] = useState()
    
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= rating ? "fa-solid fa-star" : "fa-regular fa-star";
            stars.push(
                <i key={i} data-rating={i} className={starClass} style={{ color: '#dfe232', padding: '0 3px' }} />
            );
        }
        return stars;
    };
    useEffect(() => {
        if (order) {
            setListGoodsReview({
                status: true,
                statusOrder: "",
                date: "",
                time: "",
                username: JSON.parse(localStorage.getItem('user'))[1],
                email: JSON.parse(localStorage.getItem('user'))[0],
                image: JSON.parse(localStorage.getItem('user'))[4],
                product: order.product.map(item => ({ nameProduct: item.nameProduct, img: item.img[0], imgExchange: "", star: 0, content: "", collection: item.collection }))
            })
        }
    }, [order])
    const handleChangeReview = (data) => {
        const updatedProductList = listGoodsReview.product.map(item => {
            if (item.nameProduct === data.nameProduct) {
                return { ...item, ...data };
            }
            return item;
        });
        const updatedObj = { ...listGoodsReview, product: updatedProductList }
        setListGoodsReview(updatedObj)
    }
    const handleSubmitReview = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const time = `${hours}:${minutes}`;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const today = `${year}-${month}-${day}`;
        const test = listGoodsReview.product.map((item) => item.star === 0)
        if (test.includes(true)) {
            Swal.fire({
                title: "Submit request failed!",
                text: "It looks like you haven't evaluated all the products in your order!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {
            fetchRatingOrder(order.orderId, { ...listGoodsReview, date: today, time: time })
                .then(result => {
                    onHandleToggleShowRate()
                    Swal.fire({
                        title: "Successfully sent!",
                        text: 'You have successfully submitted a product review!',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error sent!",
                        text: 'The connection to the server seems to have a problem!',
                        icon: 'warning',
                        confirmButtonText: 'OK!'
                    })
                })

        }
    }

    return (
        <div className='section-order'>
            <div className={toggleShowRate ? 'col-12 section-info-order active' : 'col-12 section-info-order'}>
                <div className={toggleShowRate ? 'first-form section-form-info-order show-review' : 'first-form section-form-info-order'}>
                    <div className='section-form-info-order-title play-bold'><i className='fa-solid fa-arrow-left' onClick={() => (onHandleToggleShowRate(false))} style={{ cursor: 'pointer', fontSize: 26 }} /><span>Review Goods Order</span><i className='fa-solid fa-xmark' onClick={() => (onHandleToggleShowRate(false))} style={{ cursor: 'pointer', fontSize: 26 }} /></div>
                    {order && order.statusReview.statusOrder === "" ? <>
                        <div className='section-form-info-review-content'>
                            <div className='box-info-purchaser-review'>
                                {order.statusReview.product.map((item, index) => {
                                    return <React.Fragment key={index}>
                                        <div className='info-product-review'>
                                            <div className='info-product-img'><img src={item.img} alt='' /></div>
                                            <div className='info-product-content'>
                                                <div className='play-bold'>{item.nameProduct}</div>
                                                <div>{renderStars(item.star)}</div>
                                                <label className='play-bold'>Content rated: {item.content}</label>
                                            </div>
                                        </div>

                                    </React.Fragment>
                                })}
                            </div>
                        </div>
                        <div className='section-form-info-order-title play-bold'>
                        </div>
                    </>
                        :
                        <>
                            <div className='section-form-info-review-content'>
                                <div className='box-info-purchaser-review'>
                                    {listGoodsReview && listGoodsReview.product.map((item, index) => {
                                        return <Goods item={item} key={index} onHandleChangeReview={handleChangeReview}/>
                                    })}
                                </div>
                            </div>
                            <div className='section-form-info-order-title play-bold'>
                                <div className='page-button'>
                                    <button onClick={handleSubmitReview} className='animated-button' type="button" >
                                        <span>Accept</span>
                                        <span></span>
                                    </button>
                                    <button onClick={onHandleToggleShowRate} className='animated-button' type="button" >
                                        <span style={{ color: 'red' }}>Decline</span>
                                        <span></span>
                                    </button></div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
        // <Modal size="lg" show={toggleShowRate} onHide={onHandleToggleShowRate} backdrop="static" keyboard={false} animation={false}>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Product Reviews</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <Modal.Body>
        //             {order && order.statusReview.product.map((item, index) => {
        //                 return <GoodsReview item={item} key={index} />
        //             })}
        //         </Modal.Body>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant="secondary" onClick={onHandleToggleShowRate}>
        //             Close
        //         </Button>
        //     </Modal.Footer>
        // </Modal>
    );
}

export default Index;
