import React from "react";

function Footer() {
    var currentYear = new Date().getFullYear();
    return (
        <div className="my-footer">
            Copyright {currentYear}
        </div>
    );
}

export default Footer;