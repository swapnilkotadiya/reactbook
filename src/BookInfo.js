import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookInfo() {
  let params = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch("https://62da11cc5d893b27b2f09542.mockapi.io/books/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBook(res);
      });
  }, []);

  return (
    <>
      <div class="pb0">
        <div class="container pt50">
          <div class="row">
            <div class="center_column col-xs-12 col-sm-12">
              <div class="primary-box row">
                <div class="pb-left-column col-xs-12 col-md-4">
                  <div class="bbi-pro-detail-slider-parent shadow-sm p-3 mb-5 bg-white rounded">
                    <div class="product-full">
                      <div class="img-zoom-lens">
                        <img src={book.BookImage}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pb-right-column col-xs-12 col-md-8 border-righ">
                  <h2 class="product-name">{book.BookTitle}</h2>
                  <div class="comments-advices">
                    <div id="author">
                      <strong>Author:</strong>
                      <h3 class="aut">{book.BookAuthor}</h3>
                      <br></br>
                      <strong>Pages:</strong>
                      <h3 class="aut">{book.BookNoOfPages}</h3>
                    </div>
                    <br></br>
                    <div class="product-price-group">
                      <span class="price">
                        <span>&#8377;</span>
                        {book.BookPrice}
                      </span>
                      <span class="old-price">
                        <span>&#8377;</span>
                        {book.BookOldPrice}
                      </span>
                      <span class="discountonbook">{book.Discount}</span>
                    </div>
                  </div>
                  <br></br>
                  <div class="description">
                    <div id="information" class="tab-panel bbi-pro-desc active">
                      <p class="info">{book.BookDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dl class="row">
        <dt class="col">
          <button
            onClick={() => {
              fetch(
                "https://62da11cc5d893b27b2f09542.mockapi.io/books/" +
                  params.id,
                {
                  method: "DELETE"
                }
              ).then((res) => {
                navigate("/");
              });
            }}
          >
            Delete
          </button>
        </dt>
        <dt class="col">
          <button
            onClick={() => {
              navigate("/book/edit/" + params.id);
            }}
          >
            Edit
          </button>
        </dt>
      </dl>
    </>
  );
}

export default BookInfo;
