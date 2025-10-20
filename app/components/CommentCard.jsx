function CommentCard({...props}) {
    const {thing, comment} = props;

    return (  
<>
    <div>
        <h2>comments</h2>
        <textarea className="comment-box" name="comments" id="">{comment}</textarea>
        <button>submit</button>
        <h3></h3>
    </div>
</>
    );
}

export default CommentCard;