import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import GoodsReview from 'components/Content/AccountNew/OrderDetails/Rating/GoodsReview'
import Swal from 'sweetalert2'
import { fetchRatingOrder } from 'Apis'
const Index = (props) => {
    const { toggleRate, onHandleToggleShow, order } = props
    const [listGoodsReview, setListGoodsReview] = useState()
    useEffect(() => {
        if (order) {
            setListGoodsReview({
                status: true,
                statusOrder: "",
                date: "", 
                time: "" ,
                username: JSON.parse(localStorage.getItem('user'))[1],
                email: JSON.parse(localStorage.getItem('user'))[0],
                image: JSON.parse(localStorage.getItem('user'))[4],
                product: order.product.map(item => ({ nameProduct: item.nameProduct, img: item.img[0], imgExchange: "", star: 0, content: "", collection: item.collection}))
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
        if(test.includes(true)) {
            Swal.fire({
                title: "Submit request failed!",
                text: "It looks like you haven't evaluated all the products in your order!",
                icon: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {
            fetchRatingOrder(order.orderId, {...listGoodsReview, date: today, time:time})
                .then(result => {
                    onHandleToggleShow()
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
        <Modal size="lg" show={toggleRate} onHide={onHandleToggleShow} backdrop="static" keyboard={false} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Product Reviews</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Modal.Body>
                    {listGoodsReview && listGoodsReview.product.map((item, index) => {
                        return <GoodsReview item={item} key={index} onHandleChangeReview={handleChangeReview} />
                    })}
                </Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHandleToggleShow}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmitReview}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Index;
