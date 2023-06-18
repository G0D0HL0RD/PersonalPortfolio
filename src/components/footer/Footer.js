import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Samaksh</h1>

            <ul className='footer__list'>
                <li>
                    <a className='footer__link' href='#about' style={{color:"var(--title-color)"}}>About</a>
                </li>

                <li>
                    <a className='footer__link' href='#portfolio' style={{color:"var(--title-color)"}}>Projects</a>
                </li>

                <li>
                    <a className='footer__link' href='#hobbies' style={{color:"var(--title-color)"}}>Hobbies</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https://www.instagram.com/' className='footer__social-link' target='_blank'><i class="bx bxl-instagram"></i></a>
                <a href='https://www.facebook.com/' className='footer__social-link' target='_blank'><i class="bx bxl-facebook"></i></a>
                <a href='https://twitter.com/' className='footer__social-link' target='_blank'><i class="bx bxl-twitter"></i></a>
            </div>

            <span className='footer__copy'>&#169; Samaksh Gupta.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
