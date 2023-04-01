import React from 'react';

const Blog = () => {
    return (
        <div className='my-5 card Larger shadow p-3 '>
            <div>
                <h4>1. Props vs state.</h4>
                <p>
                    Props can't change it's properties value by itself. Properties value of props can be changed by state.
                </p>
            </div>
            <div className='mt-2'>
                <h4>2. How does useState work ?</h4>
                <p>
                    useSate is typically used for components state management.
                </p>
            </div>
            <div className='mt-2'>
                <h4>3. Purpose of useEffect other than fetching data.</h4>
                <p>
                    In addition to fatching data, useEffect is used for side effect perform of components, perform clean-up tasks, trigger animations on the page and so on.
                </p>
            </div>
            <div className='mt-2'>
                <h4>4. How Does React work ?</h4>
                <p>
                    React efficient handling of the virtual DOM and its one-way data flow make it a powerful and popular library for building dynamic user interfaces.
                </p>
            </div>
        </div>
    );
};

export default Blog;