import React, { useState } from 'react';

const Index = ({ item, onHandleChangeReview }) => {
    const [rating, setRating] = useState();
    const handleClick = (event) => {
        const selectedRating = parseInt(event.target.dataset.rating);
        setRating(selectedRating)
        onHandleChangeReview({ ...item, star: selectedRating })
    };
    const handleMouseLeave = () => {
        setRating(rating);
    };
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= rating ? 'fa fa-star checked' : 'fa fa-star';
            stars.push(
                <span
                    key={i}
                    className={starClass}
                    data-rating={i}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    style={{ padding: "0px 5px" }}
                ></span>
            );
        }
        return stars;
    };
    const handleChangeReviewContent = (e) => {
        onHandleChangeReview({ ...item, content: e.target.value })
    }
    return (
        <React.Fragment >
            <div className='info-product-review'>
                <div className='info-product-img'><img src={item.img} alt='' /></div>
                <div className='info-product-content'>
                    <div className='play-bold'>{item.nameProduct}</div>
                    <div>{renderStars(item.star)}</div>
                    {/* <label className='play-bold'>: {item.content}</label> */}
                    <form>
                        <div className='profile-content'>
                            <div className="profile-value">
                                <div className="input-field">
                                    <input style={{width:'300px'}} type="text" onChange={e => handleChangeReviewContent(e)} value={item.content} required />
                                    <label>Content rated</label>
                                </div>
                            </div>
                        </div></form>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Index;
