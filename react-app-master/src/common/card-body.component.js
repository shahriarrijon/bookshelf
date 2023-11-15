const CardBody = ({title, body}) => {
    
    return (
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
        </div>
    );
}
 
export default CardBody;