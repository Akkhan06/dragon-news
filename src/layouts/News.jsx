import React from 'react';
import { Card, CardGroup, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CardGGG from '../pages/Home/Home/cardGroup/CardGGG';

const News = () => {
    const singleNews = useLoaderData()
    const { title, _id, category_id, author, thumbnail_url,rating, image_url, details, number, badge, total_view } =
    singleNews;
    const { published_date, img, name } = author;
    console.log(singleNews)
    const navigate = useNavigate(-1)

    return (
        <div className="text-black">
        <Card className=" mb-3">
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <Image
                  style={{ width: "40px" }}
                  src={img}
                  className=""
                  roundedCircle
                />
                <div className="">
                  <h5>{name}</h5>
                  <p>{published_date}</p>
                </div>
              </div>
              <div className="">
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
              {details}
            </Card.Text>
            <Link to={`/category/${category_id}`}><button className='bg-primary text-white border-0'> {"<< Go somewhare"}</button></Link>
          </Card.Body>
          <Card.Footer className="text-danger d-flex justify-content-between align-items-center">
            <div className="">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={
                <FaRegStar></FaRegStar>
              }
              placeholderSymbol={
                <FaStar></FaStar>
              }
              fullSymbol={
                <FaStar></FaStar>
              }
            /> {rating.number}
            </div>
            <div className="text-black">
              <FaEye></FaEye> {total_view}
            </div>
          </Card.Footer>
        </Card>

        <div>
            <CardGGG></CardGGG>
        </div>
      </div>
    );
};

export default News;