import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0a1628',
      color: '#8b9bb4',
      padding: '60px 20px 30px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Company Section */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px' }}>Company</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>About company</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Company services</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Job opportunities</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Creative people</a></li>
          </ul>
        </div>

        {/* Customer Section */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px' }}>Customer</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Client support</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Latest news</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Company story</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Pricing packages</a></li>
          </ul>
        </div>

        {/* Additional Section */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px' }}>Additional</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Our story</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Who we are</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Our process</a></li>
            <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Latest news</a></li>
          </ul>
        </div>

        
      </div>

      {/* Social Media Icons */}
      <div style={{
        display: 'flex',
        gap: '15px',
        maxWidth: '1200px',
        margin: '0 auto 30px',
        paddingTop: '20px'
      }}>
        <a href="#" style={{ color: '#8b9bb4', fontSize: '20px' }}><FaFacebookF /></a>
        <a href="#" style={{ color: '#8b9bb4', fontSize: '20px' }}><FaTwitter /></a>
        <a href="#" style={{ color: '#8b9bb4', fontSize: '20px' }}><FaInstagram /></a>
        <a href="#" style={{ color: '#8b9bb4', fontSize: '20px' }}><FaLinkedinIn /></a>
      </div>

      {/* Bottom Section */}
      <div style={{
        borderTop: '1px solid #1a2942',
        paddingTop: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px' }}>
          <a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Privacy policy</a>
          <a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Legal notice</a>
          <a href="#" style={{ color: '#8b9bb4', textDecoration: 'none' }}>Terms of service</a>
        </div>
        <p style={{ margin: 0, fontSize: '14px' }}>© 2025 YourCompany</p>
      </div>
    </footer>
  );
};

export default Footer;
