
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Divyansh Rajpoot</h3>
              <p className="text-sm text-gray-300 mt-1">B.Tech CSE Graduate</p>
            </div>
            
            <div className="text-center md:text-right">
              {/* <p className="text-sm flex items-center justify-center md:justify-end">
                Made with <Heart size={14} className="text-accent mx-1" fill="currentColor" /> by Divyansh Rajpoot
              </p> */}
              <p className="text-sm text-center md:text-right">  Made by Divyansh Rajpoot
              </p>


            <p className="text-xs text-gray-400 mt-1">
                &copy; {currentYear} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
