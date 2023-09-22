import React from 'react';

const Index = (props) => {
    const { product } = props
    const renderTextWithSpan = (text) => {
        const splitText = text.split(/<br\s*\/?>/i); // tách chuỗi tại vị trí <br/> hoặc <br>

        return splitText.map((textPart, index) => {
            if (index === splitText.length - 1) {
                // nếu đây là phần tử cuối cùng thì trả về textPart không cần thêm <span>
                return textPart;
            }

            // nếu không thì thêm <span> để render
            return (
                <p key={index} style={{ fontSize: '16px' }}>
                    {textPart}</p>
            );
        });
    }
    return (
        <div role="tabpanel" className="tab-pane active" id="details-goods">
            <strong>

            </strong>
            <p>
                <strong />
            </p>
            <h2>
                <span style={{ fontSize: '22px' }}>
                    <strong>
                        THÔNG SỐ KĨ THUẬT:<strong>
                            &nbsp;</strong>
                    </strong>
                </span>
            </h2>
            <div className="scroll-table">
                <table id="tblGeneralAttribute" cellPadding={3} cellSpacing={0}>
                    <tbody style={{ boxSizing: 'border-box' }}>
                        {product.description_table.map((item, index) => {
                            return <tr className="row-info" key={index}>
                                <td>
                                    <span style={{ fontSize: '18px' }}>
                                        <strong>
                                            <p target="_blank">
                                                {item[0]}</p>
                                        </strong>
                                    </span>
                                </td>
                                <td>
                                    {renderTextWithSpan(item[1])}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

            {(product.description).map((item, index) => {
                return <React.Fragment ><h3 >
                    <strong>
                        <span style={{ fontSize: '22px' }}>
                            {item[0]}</span>
                    </strong>
                </h3>
                    <p>
                        <span style={{ fontSize: '18px' }}>
                            {item[1]}</span>
                    </p>
                    {product.img[index] ? <p style={{ textAlign: 'center' }}>
                        <img alt="" src={product.img[index]} width={500} />
                    </p> : null}
                </React.Fragment>
            })}

        </div>
    );
}

export default Index;
