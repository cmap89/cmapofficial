import { FaPhone, FaMapMarker, FaEnvelope, FaGuitar, FaMusic } from 'react-icons/fa';
import { LuAudioLines } from "react-icons/lu";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="ftr-contact">
                <div className="ftr-list-container">
                    <h3>Get In Touch</h3>
                    <ul className="ftr-lst ftr-cntct-lst">
                        <li className="ft-cntct-item">
                            {<FaMapMarker className="ft-cntct-icon" />}
                            San Francisco, CA
                        </li>
                        <li className="ft-cntct-item">
                            {<FaPhone className="ft-cntct-icon" />}
                            +1 (510) 630-7256
                        </li>
                        <li className="ft-cntct-item">
                            {<FaEnvelope className="ft-cntct-icon" />}
                            charlie@cmapofficial.com
                        </li>
                    </ul>
                </div>
                <div className="ftr-list-container">
                    <h3>Core Services</h3>
                    <ul className="footer-list ftr-service-lst">
                        <li className="ft-cntct-item">
                            {<LuAudioLines className="ft-cntct-icon" />}
                            Audio Engineering
                        </li>
                        <li className="ft-cntct-item">
                            {<FaGuitar className="ft-cntct-icon" />}
                            Session Musician
                        </li>
                        <li className="ft-cntct-item">
                            {<FaMusic className="ft-cntct-icon" />}
                            Music Educator
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ftr-copyright">{`© ${new Date().getFullYear()}, cmap Music`}</div>
        </div>
    );
}
