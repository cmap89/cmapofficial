export default function PageSection({ children, className = "", ...props }) {
    return (
        <section className={`page-section ${className}`} {...props}>{children}</section>
    )
}