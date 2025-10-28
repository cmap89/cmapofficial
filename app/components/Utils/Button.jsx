// Props: {msg: string}
export default function Button({ msg, className = "", ...props }) {
  return (
    <button className={`${className} btn`} {...props} >{msg}</button>
  );
}
