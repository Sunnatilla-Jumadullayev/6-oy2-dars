import React from "react";
import "./Product.scss";

let PRODUCT = [
  {
    title: "Smart watch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKS1-1OBqdARuJ1kO-AW9RrZkA5uLBuy5PHw&s",
    rating: 5,
    price: 255.0,
  },
  {
    title: "Chrisrian can vant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7a-EcvMgpDOns_YK5fVg7rYEaGcmIsVJyrg&s",
    rating: 3,
    price: 200.0,
  },
  {
    title: "Jacob & Co",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-4Ij2_dlwrAJ2S7RYllGUevijHX5zaMSrA&s",
    rating: 10,
    price: 7000.0,
  },
  {
    title: "One Hand watch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEAPYGEK94BN6460t1cZDRT6WOvFi09qeqw&s",
    rating: 8,
    price: 675.0,
  },
  {
    title: "Rolex",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGOudtOaJCqifn1Zoyj6D8wSSJid8DDg1_Q&s",
    rating: 9,
    price: 2505.0,
  },
  {
    title: "R-08Smart watch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SEFxg2s79LeUgxxz4_e9YhRmXbX9vRPH-A&s",
    rating: 7,
    price: 2055.0,
  },
];

const Product = () => {
  return (
    <section className="product container">
      <p className="product__link">Find your favourite smart watch.</p>
      <h2 className="product__title">Our Latest Products</h2>
      <div className="product__wrapper">
        {PRODUCT.map((link, index) => {
          return (
            <div className="product__card">
              <img src={link.image} alt={link.title} />
              <h4 className="product__card-title">{link.title}</h4>
              <p className="product__rating">rating: {link.rating}</p>
              <p className="product__prise">{link.price}.00 $</p>
            </div>
          );
        })}
      </div>
      <button className="product__btn">view more</button>
    </section>
  );
};

export default Product;
