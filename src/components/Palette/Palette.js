
import './Palette.css';

import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'
import pic3 from './images/pic3.png'
import pic4 from './images/pic4.png'

function Palette() {
  return (
<div class="section4">
  <div class="section4-content">
    <div class="section4-item">
    <img id= "" src={pic1} />
    <div class="section4-text">
      <p id="p1">Midnight Shadow </p>
      <p id="p1">#222222 <br></br>
      RGB: (34, 34, 34)<br></br>
      CMYK: (0%, 0%, 0%, 87%)
       </p>
       </div>
    </div>
    <div class="section4-item">
    <img id= "" src={pic3} />
    <div class="section4-text">
    <p  id="p2">Creamy Alabaster </p>
    <p id="p2">#fbf3e4 <br></br>
      RGB: (251, 243, 228)<br></br>
      CMYK: (0%, 3%, 9%, 2%)
       </p>
       </div>
      </div>
      <div class="section4-item">
    <img id= "" src={pic2} />
    <div class="section4-text">
    <p  id="p3">Eclipse Black </p>
    <p id="p3">#1f1f1f <br></br>
    RGB: (31, 31, 31)<br></br>
    CMYK: (0%, 0%, 0%, 88%)
       </p>
       </div>  
      </div>
      <div class="section4-item">
    <img id= "" src={pic4} />
    <div class="section4-text">
    <p  id="p4">Crimson Bloom </p>
    <p id="p4">#b91646 <br></br>
    RGB: (185, 22, 70)<br></br>
    CMYK: (0%, 88%, 62%, 27%)
       </p>
       </div>  
      </div>
  
  </div>
</div>

  );
}

export default Palette;
