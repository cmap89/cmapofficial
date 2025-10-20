import ImageCard from "./ImageCard";

// Props: {img: string}
export default function Sidebar(props){
    const { img } = props;
    
    return (
    <div className="sidebar-container">
        {/* Change the image render to an image card component */}
        <div className="banner"></div>
        { img !== undefined ? <ImageCard src={img} /> : null}
    </div>
    )
}