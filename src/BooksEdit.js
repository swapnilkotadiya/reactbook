import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FacultyEdit() {
  const navigate = useNavigate();
  let params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://62da11cc5d893b27b2f09542.mockapi.io/books/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <>
      <div class="form-group">
        <label class="col-md-4 control-label">Book Title</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.BookTitle}
              onChange={(e) => {
                setData({ ...data, BookTitle: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">Book No Of Pages</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.BookNoOfPages}
              onChange={(e) => {
                setData({ ...data, BookNoOfPages: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">Book Description</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.BookDescription}
              onChange={(e) => {
                setData({ ...data, BookDescription: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">Book Author</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.BookAuthor}
              onChange={(e) => {
                setData({ ...data, BookAuthor: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">Book Price</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.BookPrice}
              onChange={(e) => {
                setData({ ...data, BookPrice: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">Book Image</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.BookImage}
              onChange={(e) => {
                setData({ ...data, BookImage: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">Book Old Price</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.BookOldPrice}
              onChange={(e) => {
                setData({ ...data, BookOldPrice: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label">Discount</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </span>
            <input
              value={data.Discount}
              onChange={(e) => {
                setData({ ...data, Discount: e.target.value });
              }}
              class="form-control"
              type="text"
            ></input>
          </div>
        </div>
      </div>
      <div class="col">
        <button
          onClick={() => {
            fetch(
              "https://62da11cc5d893b27b2f09542.mockapi.io/books/" + params.id,

              {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
              }
            ).then((res) => {
              navigate("/");
            });
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}
