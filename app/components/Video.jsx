// Props: {youtubeId: string}
export default function Video({ youtubeId }) {
    return (
      <iframe src={`https://www.youtube.com/embed/${youtubeId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}