import Link from "next/link";
import { defaultSocials } from '../../data/defaultSocials';
// Default social links - can be imported and customized elsewhere


export default function SocialsStrip({
    socials = defaultSocials,
    clickEvent,
    className = "",
    iconClassName = "fa-link",
    exclude = [],  // Array of IDs to exclude, e.g., ['facebook']
    include = null // Array of IDs to include (if set, only these show), e.g., ['instagram', 'spotify']
}) {

    // Filter socials based on include/exclude
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