
import './Testimonial.css';

import lenny from './images/lenny.jpg'

function Testimonial() {
  return (
<div class="testimonial">
  <div class="testimonial-content">
  <p id="testimonial-text">"I love it when you call me Big Poppa
Throw your hands in the air if you's a true player
I love it when you call me Big Poppa
To the honeys gettin' money, playin' niggas like dummies
I love it when you call me Big Poppa
You got a gun up in your waist, please don't shoot up the place (Why?)
'Cause I see some ladies tonight that should be havin' my baby (Uh), baby (Uh)"</p>
  <div class="testimonial-profile">
  <img id= "" src={lenny} />
  <p>Lenuel Anderson Betita </p>
  <p id="title">Project Manager </p>
  </div>
  </div>
</div>

  );
}

export default Testimonial;
