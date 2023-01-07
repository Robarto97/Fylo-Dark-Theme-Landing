import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <ul>
        <li>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <div className="avatar">
              <img src={profile1} alt="" />
            </div>
            <div className="info">
              <p className="name">Satish Patel</p>
              <p className="role">Founder & CEO, Huddle</p>
            </div>
          </div>
        </li>
        <li>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <div className="avatar">
              <img src={profile2} alt="" />
            </div>
            <div className="info">
              <p className="name">Bruce McKenzie</p>
              <p className="role">Founder & CEO, Huddle</p>
            </div>
          </div>
        </li>
        <li>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <div className="avatar">
              <img src={profile3} alt="" />
            </div>
            <div className="info">
              <p className="name">Iva Boyd</p>
              <p className="role">Founder & CEO, Huddle</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Testimonials;
