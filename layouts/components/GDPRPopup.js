import Link from 'next/link';
import { useState, useEffect } from 'react';

const GDPRPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
    if (!hasAcceptedCookies) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasAcceptedCookies', 'true');
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="gdpr-popup">
        <div className="gdpr-popup-content">
          <p>
            To provide you with the best possible user experience, this website
            uses cookies. To learn more about the cookies we use, please view
            our {" "}
            <Link href={`privacy-policy`} className="gdpr-popup-link">
              Privacy Policy
            </Link>
          </p>
          <button onClick={handleClose}>Got it!</button>
        </div>
      </div>
    )
  );
};

export default GDPRPopup;
