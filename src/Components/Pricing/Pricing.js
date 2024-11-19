import React from "react";
import "./index.scss";
import cx from "classnames";
const pricing = [
  {
    plan: "Silver Plan",
    offers: {
      Bandwidth: "50GB",
      memmory: "250GB",
      Users: "25",
      addOns: "25",
      support: "Mail Only",
    },
    price: "99/mo",
  },
  {
    plan: "Gold Plan",
    offers: {
      Bandwidth: "100GB",
      memmory: "500GB",
      Users: "100",
      addOns: "50",
      support: "Mail Only",
    },
    price: "499/mo",
  },
  {
    plan: "Platinum Plan",
    offers: {
      Bandwidth: "200GB",
      memmory: "1TB",
      Users: "250+",
      addOns: "100",
      support: "Mail Only",
    },
    price: "999/mo",
  },
];
const Pricing = () => {
  return (
    <div className="pricing">
      <h2 className="section-heading">Bussiness Plans</h2>
      <div className="container w-100">
        <div className="d-flex align-center w-100 card-container">
          {pricing.map((p) => (
            <div
              className={cx(
                "pricing-card d-flex align-flex-start justify-center",
                p.plan.toLocaleLowerCase()
              )}
            >
              <h3>{p.plan}</h3>
              <ul>
                {Object.entries(p.offers).map(([key, value], offerIndex) => (
                  <li key={offerIndex} className="d-flex align-center">
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>{" "}
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
              <p className={p.plan.toLocaleLowerCase()}>${p.price}</p>
              <a href="#">Buy Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
