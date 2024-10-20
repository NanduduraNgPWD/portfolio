
import './Skills.css';

   import pic1 from './images/1.png'
   import pic2 from './images/2.png'
   import pic3 from './images/3.png'
   import pic4 from './images/4.png'
   import pic5 from './images/5.png'
   import pic6 from './images/6.png'
   import pic7 from './images/7.png'
   import pic8 from './images/8.png'
   import pic9 from './images/9.png'
   import pic10 from './images/10.png'
  //  import pic10 from './images/2.png'
// import pic3 from './images/pic3.png'
// import pic4 from './images/pic4.png'

function Skills() {
  return (
<div id='skills'class="section-skills">
  <div class="section-skills-content">

        <div class="first">
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="1400">
          
        <img id= "" src={pic1} />
        
          </div>
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="1100">
        <img id= "" src={pic2} />
        </div>
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="800">
        <img id= "" src={pic3} />
        </div>
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="500">
        <img id= "" src={pic4} />
        </div>
        </div>
        <div class="second">
          
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="1400">
        <img id= "" src={pic5} />
        </div>
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="1100">
        <img id= "" src={pic6} />
        </div>
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="800">
        <img id= "" src={pic7} />
        </div>
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="500">
        <img id= "" src={pic8} />
        </div>
        </div>

        <div class="third">
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="800">
        <img id= "" src={pic9} />
        </div>
        <div class="box" data-aos="fade-right" data-aos-easing="ease"
     data-aos-duration="500">
        <img id= "" src={pic10} />
        </div>
        </div>
  </div>
</div>

  );
}

export default Skills;
