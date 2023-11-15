const CardFooter = ({ post, comments }) => {
  
  return (
    <>
      <div className="card-footer text-light bg-dark">
        <b>Comments:</b>
      </div>
      <div className="card-body">
        {comments.map((comment, idx) => {
          if (post.id === comment.postId) {
            return (
              <p>
                <strong>{comment.user.username}: </strong> {comment.body}
              </p>
            );
          }
        })}
      </div>
    </>
  );
};

export default CardFooter;
