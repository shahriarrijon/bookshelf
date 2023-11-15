import CardBody from "./card-body.component";
import CardFooter from "./card-footer.component";
import CardHeader from "./card-header.component";

const Card = ({ post, comments, userName, tags }) => {
    console.log(post);
  return (
    <div className="card col-lg-6 text-left mt-5 ms-auto me-auto">
      <CardHeader userName={userName} tags={tags} />
      <CardBody title={post.title} body={post.body} />
      <CardFooter post={post} comments={comments} />
    </div>
  );
};

export default Card;
