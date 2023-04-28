import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../pages/Home/NewsCard/NewsCard';
import { Card } from 'react-bootstrap';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div className='text-success font-'>
            {id && <h1>category {categoryNews.length}</h1>}
            {
                categoryNews.map(x => <NewsCard
                key={x._id}
                news={x}>
                </NewsCard>)
            }
        </div>
    );
};

export default Category;