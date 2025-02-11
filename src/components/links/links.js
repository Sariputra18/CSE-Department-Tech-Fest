import React from "react";
import './links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


const Links = ({ facebook, twitter, instagram, github }) => {
    return (
        <>
            <div className="links-container">
                <a href={facebook} target="_blank"><FontAwesomeIcon className="facebook" icon={faFacebook} size="2x" style={{ color: "#B62D5D" }} /></a>
                <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" style={{ color: "#B62D5D" }} />
                <FontAwesomeIcon className="twitter" icon={faTwitter} size="2x" style={{ color: "#B62D5D" }} />
                <a href={github} target="_blank"><FontAwesomeIcon className="google" icon={faGithub} size="2x" style={{ color: "#B62D5D" }} /></a>
            </div>
        </>
    );
}

export default Links;