import React from 'react'
import '../style/footer.scss';

function Footer () {
return(
    <div className="footer">&copy;
    <span id="year"></span>
    <span> Your Company Name. All rights reserved.</span>
    </div>
);
}

export default Footer;