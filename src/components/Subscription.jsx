import './Subscription.css';

const Subscription = () => {
  return (
    <div className="subscription">
      <div className="card">
        <p className="bigText">STAY TUNED</p>
        <p className="subText">
          Subscribe my newsletter and don’t miss any update on new products,
          promotions or even career events.
        </p>
        <div>
          <input type="radio" />
          <label>I read and accept the privacy policy.</label>
        </div>
        <input type="text" placeholder="yourname@email.com" />
        <button>SUBSCRIBE TO NEWSLETTER</button>
      </div>
      <div className="social">
        <p>Instagram</p>
        <p>Facebook</p>
        <p>X</p>
      </div>
    </div>
  );
};

export default Subscription;
