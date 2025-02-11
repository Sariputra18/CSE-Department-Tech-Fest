import React from "react";
import './links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Links = ({ facebook, twitter, instagram, gmail }) => {
    return (
        <>
            <div className="links-container">
                <a href={facebook} target="_blank"><FontAwesomeIcon className="facebook" icon={faFacebook} size="2x" style={{ color: "#B62D5D" }} /></a>
                <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" style={{ color: "#B62D5D" }} />
                <FontAwesomeIcon className="twitter" icon={faTwitter} size="2x" style={{ color: "#B62D5D" }} />
                <FontAwesomeIcon className="google" icon={faGoogle} size="2x" style={{ color: "#B62D5D" }} />
            </div>
        </>
    );
}

export default Links;