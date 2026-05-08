'use client'

import Script from 'next/script';

export default function IGFeed() {
    return (
        <div className="ig-feed-container">
            <h2 className="ig-fd-title">
                The Latest
            </h2>
            <div id="curator-feed-default-feed-layout"></div>
            <Script
                src="https://cdn.curator.io/published/1ad9a4d8-7e3e-4b33-89d4-3bd09b91c82b.js"
                strategy="lazyOnload"
            />
        </div>
    )
}