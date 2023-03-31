import React, { useEffect, useState } from 'react';
import './Home.css';
import CardData from './cardData';
import AddNewBlog from './AddNewBlog';
import { toast } from 'react-toastify';
const Home = () => {
    const [data, setData] = useState([]);
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);
    const addBookMark = (title) => {
        if (blog.indexOf(title) === -1) {
            const newBlog = [...blog, title]
            setBlog(newBlog);
        }
        else {
            toast("Already this title has been showing in the bookmark !")
        }
    }
    return (
        <div className='row mt-4'>
            <div className="col-lg-8">
                <div className="row gap-4">
                    {
                        data.map((info) => <CardData
                            info={info}
                            key={info.id}
                            addBookMark={addBookMark}
                        ></CardData>)
                    }
                </div>
            </div>
            <div className="col-lg-4">
                <div className='card Larger shadow p-3'>
                    <p className='text-center fs-5'>Spent time on read : <span>0</span></p>
                </div>
                <div className='mt-3 bookmark-blogs p-4 rounded'>
                    <h5 className='fw-bold text-center'>Bookmarked Blogs : <span>{blog.length ? blog.length : 0}</span></h5>
                    {
                        blog.map((addTitle, index) => <AddNewBlog addTitle={addTitle} key={index}></AddNewBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;