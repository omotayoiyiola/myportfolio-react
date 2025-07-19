import { BsInstagram } from 'react-icons/bs';
import './Subscription.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="card">
        <p className="bigText">STAY TUNED</p>
        <p className="subText">
          Subscribe my newsletter and don’t miss any update on new products,
          promotions or even career events.
        </p>
        <div className="radio-style">
          <input type="radio" className="radio-style" />
          <label>I read and accept the privacy policy.</label>
        </div>
        <input type="text" placeholder="yourname@email.com" />
        <button>SUBSCRIBE TO NEWSLETTER</button>
      </div>
      <div className="social">
        <FaInstagram size={20} color="" />
        <FaFacebookF size={20} />
        <FaTwitter size={20} />
      </div>
    </div>
  );
};

export default Subscription;
