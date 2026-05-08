import Link from "next/link";
import { defaultSocials } from '../../data/defaultSocials';


export default function SocialsStrip({
    socials = defaultSocials,
    clickEvent,
    className = "",
    iconClassName = "fa-link",
    exclude = [],
    include,
}) {

    let filteredSocials = socials.filter(social => social.enabled !== false);

    if (include) {
        filteredSocials = filteredSocials.filter(social => include.includes(social.id));
    }

    if (exclude.length > 0) {
        filteredSocials = filteredSocials.filter(social => !exclude.includes(social.id));
    }

    return (
        <div className={`social-strip-container ${className}`}>
            {filteredSocials.map((social) => {
                const IconComponent = social.icon;
                return (
                    <Link
                        key={social.id}
                        onClick={clickEvent}
                        href={social.url}
                        target="_blank"
                        rel='noopener noreferrer'
                        aria-label={social.label}
                    >
                        <IconComponent className={iconClassName} />
                    </Link>
                );
            })}
        </div>
    );
}