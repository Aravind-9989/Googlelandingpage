import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function GoogleFooter() {
  return (
    <footer style={{ backgroundColor: '#f2f2f2', padding: '20px 0', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginRight: '950px' }}>
        <span style={{ marginRight: '10px' }}>Follow Us</span>
        <a href="#" style={{ marginRight: '10px' }}><i className='fab fa-youtube' style={{ width: '24px', height: '24px' }}></i></a>
        <a href="#" style={{ marginRight: '10px' }}><i className='fab fa-twitter' style={{ width: '24px', height: '24px' }}></i></a>
        <a href="#" style={{ marginRight: '10px' }}><i className='fab fa-facebook-square' style={{ width: '24px', height: '24px' }}></i></a>
      </div>
      
     
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    
        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px', padding: '0 20px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Chrome Family</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chromebooks</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chromecast</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Other Platforms</a></li>
          </ul>
        </div>
        
     
        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px', padding: '0 20px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Enterprise</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Download Chrome Browser</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chrome Browser for Enterprise</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Google Cloud</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Google Workspace</a></li>
          </ul>
        </div>
        
    
        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px', padding: '0 20px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Education</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Google Chrome Browser</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Devices</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Web Store</a></li>
          </ul>
        </div>
        
       
        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px', padding: '0 20px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Dev and Partners</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chromium</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>ChromeOS</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chrome Web Store</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chrome Experiments</a></li>
          </ul>
        </div>
        
       
        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px', padding: '0 20px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Stay Connected</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chrome Help</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Google Chrome Blog</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Update Chrome</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Chrome Tips</a></li>
          </ul>
        </div>
      </div>
      
   
      <div style={{ backgroundColor: '#e5e5e5', padding: '10px 0', borderTop: '1px solid #ccc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '10px' }}><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Google</a></li>
            <li style={{ marginRight: '10px' }}><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Privacy</a></li>
            <li style={{ marginRight: '10px' }}><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Terms</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Settings</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default GoogleFooter;
