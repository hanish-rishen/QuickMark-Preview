function Social() {
    return (
      <main>
        <section className="footer p-5">
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0'> {/* Left side of the row on desktop */}
                <h3 className="mb-0">Copyright © 2024, MarkdownMagic.</h3>
              </div>
              <div className='col-md-6 d-flex align-items-center justify-content-center justify-content-md-end'> {/* Right side of the row on desktop */}
                <div className="social d-flex justify-content-center justify-content-md-end"> {/* Adjust margins for spacing */}
                  <button className="btn me-2"><i className="fa-brands fa-twitter"></i></button>
                  <button className="btn me-2"><i className="fa-brands fa-instagram"></i></button>
                  <button className="btn me-2"><i className="fa-brands fa-facebook-f"></i></button>
                  <button className="btn me-2"><i className="fa-brands fa-discord"></i></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Social;
  