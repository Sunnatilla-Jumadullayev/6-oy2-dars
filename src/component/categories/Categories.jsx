import React from "react";
import "./Categories.scss";

let Categories__list = [
  {
    title: `Apple`,
    desc: `Apple is one of the most famous smart watches providing company.`,
    image:
      "https://www.apple.com/v/watch/bo/images/overview/consider_modals/watch-plus-iphone/modal_watch_and_iphone_ping__w45m3zuc2c2a_xlarge.jpg",
  },
  {
    title: `Xiaomi`,
    desc: `Xiaomi is one of the most famous smart watches providing company.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcO4DF5Ts4ockpQKAbshEkR89LXUirysShTg&s",
  },
  {
    title: `FitBit`,
    desc: `FitBit is one of the most famous smart watches providing company.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04tqtbr1ABRfvL5HAcKBmjIRPptXhp-LLaQ&s",
  },
];

const Categories = () => {
  return (
    <>
      <section className="ctg container">
        {Categories__list.map((link, key) => {
          return (
            <div className="ctg__card" key={key}>
              <img
                className="ctg__img
              "
                src={link.image}
                alt={link.desc}
              />
              <div className="ctg__main">
                <h3 className="ctg__title">{link.title}</h3>
                <p className="ctg__text">{link.desc}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Categories;
