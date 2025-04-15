import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './public/ajira1.jpg',
    '/public/ajira2.jpg',
    '/public/ajira3.jpg',
    '/public/ajiralogo.jpg',
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-white">
      <nav className="bg-green-600 p-4 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Karu Ajira Club</h1>
          <div className="space-x-6">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/sign
            up" className="hover:underline">Register</Link>
            <Link to="/aboutus" className="hover:underline">About Us</Link>
            <Link to="/contactus" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </nav>
      <div className="relative">
        <div
          className="h-[500px] w-full overflow-hidden relative"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-red-600 opacity-50"></div>
          <div className="absolute inset-0 flex justify-between items-center p-4">
            <button
              onClick={handlePrev}
              className="text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              onClick={handleNext}
              className="text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4  mx-0 w-full relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-red-600">Welcome <span className='text-green-600'>to Karu</span>  <span className='text-red-500'> Ajira</span> <span className='text-green-600'>Club</span></h2>
          <p className="text-lg text-gray-700 mt-4">
            Empowering students with digital skills to unlock opportunities and
            build a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-600">Digital Skills</h3>
            <p className="text-gray-900 font-semibold mt-4">
              We offer a wide range of digital skills training to help students
              thrive in the modern job market.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-500">Networking</h3>
            <p className="text-gray-900 font-semibold mt-4">
              Join a community of like-minded individuals, connect with industry
              professionals, and grow your network.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-600">Opportunities</h3>
            <p className="text-gray-900 font-semibold mt-4">
              Access job and internship opportunities to kickstart your career
              in the digital economy.
            </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-red-500">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mt-4">
            Join us today and take the first step towards a brighter future.
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
