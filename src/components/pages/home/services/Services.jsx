import { FaHeartbeat, FaPills, FaUserMd } from "react-icons/fa";
import CardServices from "../../../partials/CardServices";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Our Medical Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of healthcare services to meet all your
              medical needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CardServices
              icon={FaUserMd}
              title={"General Consultation"}
              description={
                "Comprehensive health assessments and personalized treatment plans from our experienced physicians."
              }
            />
            <CardServices
              icon={FaHeartbeat}
              title={"Cardiology"}
              description={
                "Advanced heart care including diagnostics, treatment, and preventive cardiology services."
              }
            />
            <CardServices
              icon={FaPills}
              title={"Internal Medicine"}
              description={
                "Specialized care for complex illnesses and chronic conditions in adults."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
