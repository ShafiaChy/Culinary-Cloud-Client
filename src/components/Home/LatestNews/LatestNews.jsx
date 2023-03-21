import React from 'react';
import './LatestNews.css'
import image from '../../../assets/asset/latestnews.jpg'
const LatestNews = () => {
    return (
        <div className='latest-news p-20 relative text-white mt-20 '>
           
            <i className='flex justify-center relative z-10 mb-2 text-yellow-600'>---From Our Blog---</i>
              <h1 className="relative z-10 text-3xl mx-auto uppercase text-center mb-10 border-t-4 border-b-4 border-white py-5 w-3/12 ">Latest News</h1>

              <div class="relative z-10 flex justify-center items-center">
            <div>
                <img src={image}/>
            </div>
            
            <div className='ml-10'>
                <small>March 20, 2023</small>
                <h1 className='uppercase'>Where Can I get some?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                <button className="btn border-b-4 border-white border-t-0 border-x-0 bg-transparent text-white uppercase mt-10">Read More</button>
            </div>
        </div>
        </div>
    );
};

export default LatestNews;