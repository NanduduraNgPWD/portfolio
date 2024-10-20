
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>Sections</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Palette</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul>
                    <li><a href="">Web design</a></li>
                    <li><a href="">Photo editing</a></li>
                    <li><a href="">Logo making</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Others</h4>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Newsletter</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li>0956607776</li>
                    <li><a href="mailto:me@gmail.com">me@gmail.com</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
