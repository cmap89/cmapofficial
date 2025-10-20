// Props: {msg: string}
export default function Button({ msg, className="",  }) {
return (
    <button className={`btn ${className}`}>{msg}</button>
)
}