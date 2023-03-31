import React from 'react';
const CardData = (props) => {
    console.log(props);
    const { id, Author_name, Blog_title, Images, Author_image, Read_time, Publish_Date } = props.info;
    return (
        <div className="col-lg-12 rounded">
            <div className="col h-100">
                <div className="card Larger shadow">
                    <div>
                        <img className='card-image' src={Images} alt="" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                        <div className='d-flex justify-content-between align-items-center'>
                            <img className='author-img' src={Author_image} alt='' />
                            <div>
                                <h5>{Author_name}</h5>
                                <p>{Publish_Date}</p>
                            </div>
                        </div>
                        <p>{Read_time}</p>
                    </div>
                    <p>{Blog_title}</p>
                    <button className="border-0 bg-dark"><span className='text-white me-3'>Mark as read</span></button>
                </div>
            </div>
        </div>

    );
};

export default CardData;
/* 
    <div className="card border-0" style={{ backgroundColor: "green" }}>
            
        </div>
              <img src={Images} className="card-image" alt="" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
*/