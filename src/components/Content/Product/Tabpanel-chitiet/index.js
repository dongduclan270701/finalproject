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
                <p key={index} style={{ fontSize: '16px', color: '#000000' }}>
                    {textPart}</p>
            );
        });
    }
    return (
        <div role="tabpanel" className="tab-pane active" id="chitiet">
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
                <table id="tblGeneralAttribute" border={1} cellPadding={3} cellSpacing={0} style={{ backgroundColor: '#ffffff', borderCollapse: 'collapse', borderSpacing: '0px', border: '1px solid #eeeeee', boxSizing: 'border-box', color: '#333333', fontFamily: 'Roboto,sans-serif', fontSize: '13px', lineHeight: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', minWidth: '500px', width: '100%' }} className="table table-bordered">
                    <tbody style={{ boxSizing: 'border-box' }}>
                        {product.description_table.map((item, index) => {
                            return <tr style={{ boxSizing: 'border-box' }} className="row-info" key={index}>
                                <td style={{ backgroundColor: '#f7f7f7 !important', borderColor: '#eeeeee', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', padding: '8px', verticalAlign: 'top', width: '190px' }}>
                                    <span style={{ fontSize: '18px' }}>
                                        <strong>
                                            <a target="_blank" href="https://gearvn.com/collections/cpu-bo-vi-xu-ly">
                                                {item[0]}</a>
                                        </strong>
                                    </span>
                                </td>
                                <td style={{ textAlign: "left", borderColor: '#eeeeee', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', padding: '8px', verticalAlign: 'top', width: '643px',fontSize:"16px" }}>

                                    {renderTextWithSpan(item[1])}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

            {(product.description).map((item, index) => {
                return <React.Fragment key={index}><h3 >
                    <strong>
                        <span style={{ fontSize: '22px' }}>
                            {item[0]}</span>
                    </strong>
                </h3>
                    <p>
                        <span style={{ fontSize: '18px' }}>
                            {item[1]}</span>
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        <img alt="GEARVN Laptop Asus Vivobook 15 X515EA BR2045W" src={product.img[index]} />
                    </p></React.Fragment>
            })}

        </div>
    );
}

export default Index;
