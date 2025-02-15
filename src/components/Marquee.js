import React from 'react'
import Marquee from "react-fast-marquee";

import appleLogo from "../images/apple-logo.svg"
import asusLogo from "../images/asus-logo.png"
import boatLogo from "../images/boat-logo.webp"
import dellLogo from "../images/dell-logo.png"
import hpLogo from "../images/hp-logo.png"
import logitechLogo from "../images/logitech-logo.png"
import oppoLogo from "../images/oppo-logo.png"
import realmeLogo from "../images/realme-logo.png"
import samsungLogo from "../images/samsung-logo.webp"
import technoLogo from "../images/techno-logo.png"
import vivoLogo from "../images/vivo-logo.png"

import './Marquee.css'

const ResponsiveMarquee = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Marquee className='container-marquee'>
                <img src={appleLogo} className="marquee-image" />
                <img src={asusLogo} className="marquee-image" />
                <img src={boatLogo} className="marquee-image" />
                <img src={dellLogo} className="marquee-image" />
                <img src={hpLogo} className="marquee-image" />
                <img src={logitechLogo} className="marquee-image" />
                <img src={oppoLogo} className="marquee-image" />
                <img src={realmeLogo} className="marquee-image" />
                <img src={samsungLogo} className="marquee-image" />
                <img src={technoLogo} className="marquee-image" />
                <img src={vivoLogo} className="marquee-image"x />
            </Marquee>
        </div>
    )
}

export default ResponsiveMarquee