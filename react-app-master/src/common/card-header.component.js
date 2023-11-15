const CardHeader = ({userName, tags}) => {
    
  return (
    <div className="card-header bg-info">
      <h4>{userName}</h4>
      <b>
        <span className="text-dark">Tags:</span>
        <span style={{ color: "maroon" }}> {tags}</span>
      </b>
    </div>
  );
};

export default CardHeader;
