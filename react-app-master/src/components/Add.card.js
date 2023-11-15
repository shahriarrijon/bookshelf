const AddCard = ({book}) => {
    return (
        <>
            {
               book.map((item) => {
                    {
                        return (
                            <div key={item.id}>
                                <div className="addCard d-flex">
                                    <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>
                                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                                        <a href={item.volumeInfo.previewLink}><button className="btn">More</button></a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default AddCard;