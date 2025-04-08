import { Link } from 'react-router-dom';
import Logo from "../assets/ajiralogo.jpg"
const AboutUs = () => {
    return (
        <div className="bg-white">
            {/* Navbar */}
            <nav className="bg-green-600 p-4 text-white">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link rel="stylesheet" to="/" className="text-3xl font-bold"   >Karu Ajira Club </Link>
                    <div className="space-x-6">
                        <Link to="/login" className="hover:underline">Login</Link>
                        <Link to="/register" className="hover:underline">Register</Link>
                        <Link to="/aboutus" className="hover:underline">About Us</Link>
                        <Link to="/contactus" className="hover:underline">Contact Us</Link>
                    </div>
                </div>
            </nav>
            <div className='about'>
                <div className="max-w-7xl mx-auto py-16 px-4 text-center">
                    <h2 className="text-4xl font-bold text-red-500">About Karu Ajira Club</h2>
                    <p className="text-xl text-gray-900 font-bold mt-4 max-w-2xl mx-auto">
                        Karu Ajira Club is a community-driven platform dedicated to empowering students with the skills and opportunities needed to excel in the digital economy. We provide training, networking, and job opportunities to bridge the gap between education and employment.
                    </p>
                </div>

                <div className=" text-white py-16 px-4 text-center">
                    <h3 className="text-3xl font-bold">Our Mission</h3>
                    <p className="text-xl text-gray-900 mt-4  font-bold max-w-3xl mx-auto">
                        Our mission is to equip students with in-demand digital skills, provide access to global job opportunities, and create a community of future leaders in the digital economy. Through collaboration, innovation, and education, we aim to open doors to endless possibilities.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto py-16 px-4 text-center">
                    <h3 className="text-3xl font-bold text-red-500">Our Vision</h3>
                    <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                        We envision a future where every student has the opportunity to thrive in the digital world, equipped with the skills and resources they need to succeed. We aim to foster a culture of digital inclusion and empowerment, helping students unlock their full potential.
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 py-16 px-4 text-center">
                <h3 className="text-3xl font-bold text-red-500">Why Choose Karu Ajira Club?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h4 className="text-xl font-semibold text-green-600">Expert Training</h4>
                        <p className="text-gray-900 font-semibold mt-4">
                            We offer comprehensive training in various digital fields, including software development, data science, and digital marketing.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h4 className="text-xl font-semibold text-red-500">Global Opportunities</h4>
                        <p className="text-gray-900 font-semibold mt-4">
                            Our platform connects students to global job and internship opportunities, helping them gain real-world experience.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h4 className="text-xl font-semibold text-green-600">Supportive Community</h4>
                        <p className="text-gray-900 mt-4 font-semibold">
                            Join a network of like-minded individuals who are passionate about learning, growing, and making a difference.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-action */}
            <div className="text-center py-16">
                <h3 className="text-3xl font-bold text-red-500">Ready to Join Us?</h3>
                <p className="text-lg text-gray-700 mt-4">
                    If you’re ready to unlock endless possibilities in the digital world, we invite you to register with us today and take the first step towards your future.
                </p>
                <div className="mt-6">
                    <Link
                        to="/signup"
                        className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition duration-300"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
