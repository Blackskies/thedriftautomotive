import AirConditioning from "../../Assets/Images/Services/AirConditioning.jpg";
import Exhaust from "../../Assets/Images/Services/exhaust.jpg";
import OilAndFilter from "../../Assets/Images/Services/oilAndFilter.jpg";
import Painting from "../../Assets/Images/Services/painting.jpg";

export const servicesList: any = {
  "Comprehensive Car Maintenance": {
    description:
      "Routine servicing, oil changes, and mechanical inspections to keep vehicles running smoothly.",
    image: OilAndFilter,
  },
  "Detailing and Restoration": {
    description:
      "Premium detailing services that enhance the appearance and longevity of vehicles, including PPF work, ceramic coating and interior deep cleaning.",
    image: AirConditioning,
  },
  "Customization and Upgrades": {
    description:
      "Tailored customization options, including performance upgrades, interior modifications, and aesthetic enhancements.",
    image: Exhaust,
  },
  "Body Repair and Paint Services": {
    description:
      "Expert collision repair, dent removal, and high-quality paint jobs that restore vehicles to their original glory.",
    image: Painting,
  },
};

export const corevaluesList: any = {
  Excellence:
    "Delivering superior quality and exceptional service in every aspect of our business.",
  "Customer Satisfaction":
    "Prioritizing customer needs and ensuring their complete satisfaction with our services.",
  Integrity:
    "Upholding transparency, honesty, and ethical practices in all our dealings.",
  Innovation:
    "Continuously seeking new techniques and technologies to improve our services and stay ahead in the industry.",
};

export const pages = ["Services", "Our Values" ,"Contact Us"];
