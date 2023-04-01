import { useInView } from "react-intersection-observer";

const Memberships = () => {
  const { ref: basicref, inView: basicVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: plusref, inView: plusVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: proref, inView: proVisible } = useInView({ triggerOnce: true });

  return (
    <div className="memberships-section">
      <div className="memberships-title">
        <h2>Find a plan that fits your goals:</h2>
      </div>
      <div className="membership-plans">
        <div
          className={`${"basic"} ${basicVisible ? "animateBasic" : ""}`}
          ref={basicref}
        >
          <h3>Basic</h3>
          <div className="basic-pricing">
            <p className="basic-price">$0</p>
            <p>FREE</p>
          </div>
          <div className="basic-features">
            <ul>
              <li>Basic access to our tools to design your dream home</li>
              <li>Get one team member judge a submitted couch for grading</li>
            </ul>
          </div>
        </div>

        <div
          className={`${"plus"} ${plusVisible ? "animatePlus" : ""}`}
          ref={plusref}
        >
          <h3>Plus</h3>
          <div className="plus-pricing">
            <p className="plus-price">$17.49/month</p>
            <p>Billed annually or</p>
            <p>$34.99 billed monthly</p>
          </div>
          <div className="plus-features">
            <ul>
              <li>Access to everything in the basic plan</li>
              <li>Recieve 10 free gradings on couches per month</li>
              <li>
                Get professional feedback on interior design done by yourself
              </li>
            </ul>
          </div>
        </div>

        <div className={`pro ${proVisible ? "animatePro" : ""}`} ref={proref}>
          <h3>Pro</h3>
          <div className="pro-pricing">
            <p className="pro-price">$29.99/month</p>
            <p>Billed annually or</p>
            <p>$59.99 billed monthly</p>
          </div>
          <div className="pro-features">
            <ul>
              <li>Access to everything in the plus plan</li>
              <li>Recieve unlimitied free gradings on couches</li>
              <li>
                24/7 support team ready at your disposal for feedback, help
                creating interior design, and more.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
