// Props: {msg: string}
export default function Button({ msg, className = "", ...props }) {
  return (
    <button className={`btn ${className}`} {...props} >{msg}</button>
  );
}
