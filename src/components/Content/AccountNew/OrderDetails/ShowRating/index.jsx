import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import GoodsReview from 'components/Content/AccountNew/OrderDetails/ShowRating/GoodsReview'

const Index = (props) => {
    const { toggleShowRate, onHandleToggleShowRate, order } = props
    return (
        <Modal size="lg" show={toggleShowRate} onHide={onHandleToggleShowRate} backdrop="static" keyboard={false} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Product Reviews</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Modal.Body>
                    {order && order.statusReview.product.map((item, index) => {
                        return <GoodsReview item={item} key={index} />
                    })}
                </Modal.Body>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHandleToggleShowRate}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Index;
