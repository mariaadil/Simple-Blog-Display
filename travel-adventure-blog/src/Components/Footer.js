import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Travel Blog. All rights reserved.</p>
        <p className="flex justify-center mt-4">
        Follow Us: 
          <a href="https://www.facebook.com/profile.php?id=100009178280138" className="text-blue-400 mx-4 text-lg"><FaFacebook size={24} /></a>
          <a href="https://www.linkedin.com/in/maria-adil-813479243/" className="text-blue-400 mx-4 text-lg"><FaLinkedin size={24} /></a>
          <a href="https://www.instagram.com/nat_urehacks/" className="text-blue-400 mx-4 text-lg"><FaInstagram size={24} /></a>
          <a href="https://github.com/mariaadil" className="text-blue-400 mx-4 text-lg"><FaGithub size={24} /></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
