import { Link } from "react-router-dom";

const ServiceCard = ({ serviceLink, name, imgSrc }) => {
  return (
    // <div className="p-3 p-lg-4 service-sec-card">
    <Link className="p-3 p-lg-4 service-sec-card" to={serviceLink}>
      <div>
        <img src={imgSrc} alt="" />
        <div className="img-cover" />
        <h3 id="h3">{name}</h3>
      </div>
    </Link>
    // </div>
  );
};

export default ServiceCard;
