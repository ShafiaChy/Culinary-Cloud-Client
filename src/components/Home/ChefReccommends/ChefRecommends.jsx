import React, { useState,useEffect } from 'react';
import Chef from './Chef';

const ChefRecommends = () => {
    const [specials, setSpecial]=useState([]);

    useEffect(()=>{
        fetch('chef.json')
        .then(res => res.json())
        .then(data => setSpecial(data))
    },[])
    console.log(specials)
    return (
        <div>
           
                <i className='flex justify-center mt-10 mb-2 text-yellow-600'>---Should Try---</i>
              <h1 className="text-5xl mx-auto uppercase text-center mb-10 border-t-4 border-b-4 border-black py-5 w-5/12 ">Chef Reccomends</h1>
           

              <div className="grid grid-cols-3 gap-2 mt-10 place-items-center">
                    
                {
                    specials.map((special)=><Chef
                    special={special}
                    ></Chef>)
                }
        </div>
        </div>
        
    );
};

export default ChefRecommends;