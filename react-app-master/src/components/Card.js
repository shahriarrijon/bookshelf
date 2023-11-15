
import { useState } from "react";
import Modal from "./Modal";
const Card = ({ book , addToCart  }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {
               Array.from(book.entries()).map((entry) => {
                    {
                        const [key, item] = entry
                        return (
                            <div key={key}>
                                <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                    <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                                    <div className="bottom">
                                        <h2 className="title mt-3">{item.volumeInfo.title}</h2>
                                        <h5 className="authore mt-2">{item.volumeInfo.authors}</h5>
                                    </div>
                                    <button  className="btn addCart" type="button" onClick={(e)=>{
                                        e.stopPropagation()
                                        addToCart(key)
                                    }}>Add to cart</button>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                            </div>
                        )
                    }
                })
            }
        </>
    )
}
export default Card;