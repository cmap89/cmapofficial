import ImageCard from "./ImageCard";

export default function Sidebar(props) {
    const { img } = props;

    return (
        <div className="sidebar-container">
            <div className="banner"></div>
            {img !== undefined ? <ImageCard src={img} /> : null}
        </div>
    )
}