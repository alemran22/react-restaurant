import { serviceData } from "../../../constant/aboutUs";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="bg-aboutUsService-Bg bg-cover w-full md:h-[496px] flex items-center">
      <div className="container mx-auto bg-transparent flex flex-col md:flex-row justify-between items-center md:h-[355px]">
        {serviceData.map((item) => (
          <div className="border-r last:border-0" key={item.id}>
            <ServiceCard
              img={item.img}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
