import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaBeer, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, _id, author, thumbnail_url,rating, image_url, details, number, badge, total_view } =
    news;

  const { published_date, img, name } = author;
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
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`} className="text-danger">read more</Link>
              </>
            )}
          </Card.Text>
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
    </div>
  );
};

export default NewsCard;
