import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      {/* Footer Section 1: Newsletter Subscription */}
      <footer className='py-3' style={{ backgroundColor: '#F8F9FA' }}>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src='images/newsletter.png' alt='newsletter' width="50" />
                <h2 className='mb-0 text-dark'>Sign Up for Our Recipe Newsletter</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className='input-group'>
                <input 
                  type='email'
                  className='form-control py-2'
                  placeholder='Enter your email address'
                  aria-label='Your Email Address'
                  aria-describedby='basic-addon-2'
                />
                <span className='input-group-text p-2' id="basic-addon-2" style={{ backgroundColor: '#FF6347', color: '#fff', cursor: 'pointer' }}>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Section 2: Contact Us & Information */}
      <footer className='py-4' style={{ backgroundColor: '#343A40' }}>
        <div className="container-xxl">
          <div className="row">
            {/* Contact Section */}
            <div className="col-12 col-md-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  123 Recipe Street, Foodie Town, Flavorland 456789
                </address>
              </div>
              {/* Google Map Embed (Optional) */}
              <div className='map-container'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=...your-location-map..."
                  width="100%"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Location Map"
                ></iframe>
              </div>
            </div>

            {/* Information Links Section */}
            <div className="col-12 col-md-4">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/about" className="text-white py-2 mb-1">About Us</Link>
                <Link to="/recipes" className="text-white py-2 mb-1">Recipes</Link>
                <Link to="/blog" className="text-white py-2 mb-1">Blog</Link>
                <Link to="/faq" className="text-white py-2 mb-1">FAQ</Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-12 col-md-4">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/healthy-recipes" className="text-white py-2 mb-1">Healthy Recipes</Link>
                <Link to="/desserts" className="text-white py-2 mb-1">Desserts</Link>
                <Link to="/meal-plans" className="text-white py-2 mb-1">Meal Plans</Link>
                <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Section 3: Social Media Links */}
      <footer className='py-4' style={{ backgroundColor: '#23272B' }}>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='social-icons d-flex justify-content-center gap-3 mb-3'>
                
                <Link to='https://www.linkedin.com' className='text-white'>
                  <BsLinkedin size={24} />
                </Link>
                
                <Link to='https://github.com' className='text-white'>
                  <BsGithub size={24} />
                </Link>
                
                <Link to='https://www.instagram.com' className='text-white'>
                  <BsInstagram size={24} />
                </Link>
                
                <Link to='https://wa.me/1234567890' className='text-white'>
                  <BsWhatsapp size={24} />
                </Link>
              </div>

              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()} Recipe App. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
