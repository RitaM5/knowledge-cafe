import React, { useEffect, useState } from 'react';
import './Home.css';

import CardData from './cardData';
const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setData(data))
    },[]);

    return (
        <div className='row mt-4'>
            <div className="col-lg-8">
              <div className="row gap-4">
              {
                  data.map(info =><CardData info={info} key={info.id}
                    ></CardData>)
                } 
              </div>
            </div>
            <div className="col-lg-4">

            </div>
        </div>
    );
};

export default Home;