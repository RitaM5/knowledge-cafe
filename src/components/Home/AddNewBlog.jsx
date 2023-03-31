import React from 'react';

const AddNewBlog = ({addTitle}) => {
    return (
        <>
            <div className='card Larger shadow p-3 mt-4'>
                <p>{addTitle}</p>
            </div>
        </>
    );
};

export default AddNewBlog;