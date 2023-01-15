import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://62da11cc5d893b27b2f09542.mockapi.io/books")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBooks(res);
      });
  }, []);

  const foramtedBooks = books.map((boo) => {
    return (
      <>
        <div
          class="card col-md-2 shadow-lg p-3 mb-5 bg-white rounded"
          style={{ margin: "22.8px", padding: "15px" }}
        >
          <Link to={"../book/" + boo.id} id="cardss">
            <img
              class="card-img-top"
              src={boo.BookImage}
              alt="Card image cap"
            />
            <div class="card-body">
              <a class="book-name">
                <h2 class="book-title">{boo.BookTitle}</h2>
              </a>
            </div>
            <div class="content_price">
              <span class="product-price">
                <span class="rupee">
                  <span>&#8377;</span>&nbsp;
                </span>
                {boo.BookPrice}
              </span>
              <span class="old-price">
                <span class="rupee">
                  <span>&#8377;</span>&nbsp;
                </span>
                {boo.BookOldPrice}
              </span>
            </div>
            <div class="discount">
              {boo.Discount}
              <br></br> OFF
            </div>
          </Link>
        </div>
      </>
    );
  });

  return (
    <div
      class="row"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1560px",
        paddingLeft: "60px",
        paddingRight: "60px"
      }}
    >
      {foramtedBooks}
    </div>
  );
}

export default Books;
