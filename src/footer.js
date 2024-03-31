import { Link } from 'react-scroll';

function Footer() {
    return (
      <main>
        <section className="footer p-5">
          <div className='container'>
            <img className="footer-img" src="./cloud.jpg" alt="cloud"/>
            <div className='row'>
              <h2 className="footer-headline">Ready to unbox the magic?</h2>
              <Link to="markdown" smooth={true} duration={500} className="start-button btn footer-button">Start Writing</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Footer;
  
  