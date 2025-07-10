const CardServices = ({ icon: Icon, title, description }) => {
  return (
    <>
      <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
          <Icon className="text-blue-600 text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-center mb-4 text-blue-800">
          {title}
        </h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </>
  );
};

export default CardServices;
