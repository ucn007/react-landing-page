import React from "react";
import "./index.scss";
import Card from "../../Components/Card/Card";
import serviceImg from "../../assets/img/services/lead-generation.png";
import serviceImg1 from "../../assets/img/services/pipeline.png";
import serviceImg2 from "../../assets/img/services/24-hours-support.png";
import serviceImg3 from "../../assets/img/services/marketing-automation.png";
import serviceImg4 from "../../assets/img/services/data-driven.png";
import serviceImg5 from "../../assets/img/services/artifical-intelligence.png";

const services = [
  {
    img: serviceImg,
    title: "Contact and Lead Management",
    description:
      "Stores and organizes contact information and lead details.Helps track customer interactions, notes, and history in a centralized database.",
  },
  {
    img: serviceImg1,
    title: "Sales Automation and Pipeline Management",
    description:
      "Automates repetitive sales tasks, like follow-ups and scheduling.Manages the sales pipeline, tracks stages, and helps move leads through the sales funnel.",
  },
  {
    img: serviceImg2,
    title: "Customer Service and Support",
    description:
      "Manages support tickets, inquiries, and customer issues. Provides customer support tools, such as knowledge bases and chatbots, for faster resolution.",
  },
  {
    img: serviceImg3,
    title: "Marketing Automation",
    description:
      "Automates email marketing, lead nurturing, and campaign management. Enables segmentation, targeted outreach, and personalized communication to boost engagement.",
  },
  {
    img: serviceImg4,
    title: "Analytics and Reporting",
    description:
      "Offers detailed reports and insights on customer behavior, sales performance, and marketing effectiveness. Provides dashboards for tracking KPIs, sales forecasts, and other metrics.",
  },
  {
    img: serviceImg5,
    title: "AI and Predictive Insights",
    description:
      "Uses AI for lead scoring, customer sentiment analysis, and sales forecasting. Provides actionable insights, helping teams prioritize and tailor customer interactions.",
  },
];

function Services() {
  return (
    <div className="servives">
      <div className="container">
        <h2 className="section-heading">What We Provides</h2>
        <div className="d-flex align-center w-100 card-container">
          {services.map((s) => (
            <Card image={s.img} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
