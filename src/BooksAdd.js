import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BooksAdd() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
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
              "https://62da11cc5d893b27b2f09542.mockapi.io/books/",

              {
                method: "POST",
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
          Add
        </button>
      </div>
    </>
  );
}
