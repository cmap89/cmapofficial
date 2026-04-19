'use client'

import { useState } from 'react';
import FormCard from './FormCard';

export default function ServiceCard({
    title = "Service",
    description = "",
    icon = null,
    formScriptSrc,
    formTitle,
    formDescription,
    className = "service-card-container",
    expandedClassName = "service-card-expanded"
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = () => {
        setIsExpanded(true);
    };

    const handleClose = (e) => {
        e.stopPropagation(); // Prevent triggering card click
        setIsExpanded(false);
    };

    if (isExpanded) {
        return (
            <div className={`${className} ${expandedClassName}`}>
                <button
                    className="close-btn"
                    onClick={handleClose}
                    aria-label="Close form"
                >
                    ✕
                </button>
                <FormCard
                    scriptSrc={formScriptSrc}
                    title={formTitle || title}
                    description={formDescription}
                />
            </div>
        );
    }

    return (
        <div
            className={className}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
        >
            {icon && <div className="service-icon">{icon}</div>}
            <h2 className="service-title">{title}</h2>
            {description && <p className="service-description">{description}</p>}
            <span className="service-cta">Click to learn more →</span>
        </div>
    );
}