import React from 'react';
import RollingGallery from './components/rollinggallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        {/* Memory Gallery Section */}
        <section className="memories-section">
          <div className="memories-header">
            <h1>Hi Shanne!</h1>
            <p>Below is our memories, check it out!</p>
          </div>
          
          <div className="gallery-container-main">
            <h2>Memory Gallery</h2>
            <RollingGallery 
              autoplay={true} 
              pauseOnHover={true} 
            />
          </div>
          
          {/* Profile Content Section - Updated */}
          <div className="profile-content">
            <h2>About</h2>
            <p>These memories represents special and unforgettable moments during my Grade 12 era.</p>
            
            <div className="memories-stats">
              <div className="stat">
                <h3>Total Memories</h3>
                <p>infinite kasi masaya pag andyan si Sha-nne :D</p>
              </div>
              <div className="stat">
                <h3>Years of Memories</h3>
                <p>2+</p>
              </div>
              <div className="stat">
                <h3>Favorite Moments</h3>
                <p>Pagsasama at Kakulitan ni Shanne :P</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>Developed by an IT student from FAITH Colleges.</p>
      </footer>
    </div>
  );
}

export default App;