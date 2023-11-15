import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Loader from "./loader";
import AddCard from "./Add.card";
const Main = () => {
    const [loading, setloding] = useState(false)
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [cart, setCart] = useState([])

    const addToCart = (key) => {
        setCart([...cart, bookData[key]])
    }

    const searchBook = (e) => {
        e.preventDefault()
        setloding(true);
        setTimeout(() => {
            setloding(false)
        }, 500)

        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=10')
            .then(res => {
                setData(res.data.items)
            })

            .catch(err => alert(err))
    }
    
    return (
        <>
            <div className="header">
                <h1 className="mb-5">A READER LIVES A THOUSAND LIVES BEFORE HE DIE</h1>
                <h2>Serach your book</h2>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e => setSearch(e.target.value)}
                    />
                    <button style={{ cursor: "pointer", borderRadius: 0 }} type="button" className="btn btn-success" onClick={searchBook}><i className="fas fa-search"></i></button>
                </div>
                <img src="./images/bg2.png" alt="" />
            </div>
            <div className="container-main">
                {
                    loading ? <Loader /> : <Card addToCart={addToCart} book={bookData} />

                }
            </div>
            <div className="container add mt-5">
                <h3>Add Books</h3>
                <AddCard book={cart} />
            </div>
        </>
    )
}
export default Main;