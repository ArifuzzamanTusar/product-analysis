import React from 'react';

const Footer = () => {
    return (
        <div className='w-100 bg-dark'>
            <div className="footer-area py-3">
                <div className="text-center">
                        <p className="text-white m-0">
                            &copy; {new Date().getFullYear()} All Right Reserved | Developed by <a style={{textDecoration: "none"}} className='title_blue' href="https://arifuzzamantusar.com">Arifuzzaman Tusar</a>
                        </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;