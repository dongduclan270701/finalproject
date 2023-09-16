import React from 'react';
import { Form } from 'react-bootstrap'
import Goods from 'components/Content/AccountNew/OrderDetails/Goods'
const Index = (props) => {
    const { item, onHandleChangeReview } = props

    const handleChangeReviewContent = (e) => {
        onHandleChangeReview({...item, content: e.target.value})
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{ margin: "0px", padding: "10px 0px" }}>
                    <div className="col-12" style={{ padding: "0", display:'flex' }}>
                        <div className="pro-img"><img src={item.img} alt="" style={{ width: "80px", borderRadius: "3px" }} /></div>
                        <div className="pro-name" style={{ padding: "inherit", marginTop: "15px" }}>
                            <div style={{ padding: "0px 10px" }}>{item.nameProduct}</div>
                        </div>
                    </div>

                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ display: "flex", alignItems: "center" }}>
                <Form.Label>Product quality <Goods item={item} onHandleChangeReview={onHandleChangeReview}/></Form.Label>
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Content rate: </Form.Label>
                <Form.Control as="textarea" onChange={e => handleChangeReviewContent(e)} value={item.content} rows={3} placeholder='Please share the information you like about this product' />
            </Form.Group>
        </Form>
    );
}

export default Index;
