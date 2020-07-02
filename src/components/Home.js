import React from "react";
import Base from "./Base";
import "../Css/home.css";
import Sales from "./Sales";
export default function Home() {
  return (
    <Base isDisplay={true}>
      <div
        style={{
          height: "auto",
          padding: "30px 0",
          backgroundColor: "#f9e547",
          width: "100%",
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="container main-container">
              <div className="col-md-12  main-content">
                <div className="welcome-text text-center">
                  <h5>Stop paying too much for your prescriptions</h5>
                </div>
                <div className="search-form">
                  <form>
                    <i className="fa fa-search"></i>
                    <input
                      placeholder={`Type your drug name (like Atorvastatin, Sildenafil, etc) `}
                      type="text"
                      className="form-control"
                    />

                    <button className="btn btn-primary btn-lg">
                      FIND THE LOWEST PRICES
                    </button>
                  </form>
                </div>
                <Sales />

                <div className="ad btn">
                  <img
                    aria-hidden="true"
                    role="presentation"
                    tabindex="-1"
                    alt=""
                    class="image-2PX03"
                    src="https://www.grxstatic.com/mobile/15278e8056e071020b7f00c65ec2a26a5ccdc193/dist/3cfe0cb0586d9ca528248e5bc8d375aa.svg?auto=webp&amp;dpr=1.5"
                    loading="lazy"
                    width="102px"
                    height="92px"
                  ></img>
                  <div className="ad-content">
                    <h6>Need a precription or Refill?</h6>
                    <p>
                      <span>complete an online visit</span> in minuits
                    </p>
                  </div>
                  <div className="icon">
                    {" "}
                    <img
                      alt="arrow"
                      className=" arrow-1IoZM"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19hIiBkPSJNMiAwTDAuNTkgMS40MSA1LjE3IDYgMC41OSAxMC41OSAyIDEyIDggNnoiLz4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19jIiBkPSJNMCAwSDUwVjUwSDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDYpIj4KICAgICAgICA8bWFzayBpZD0icHJlZml4X19iIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcHJlZml4X19hIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxnIG1hc2s9InVybCgjcHJlZml4X19iKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMSAtMTkpIj4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgeGxpbms6aHJlZj0iI3ByZWZpeF9fYyIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                    ></img>
                  </div>
                </div>

                <div className="final">
                  <p>
                    GoodRx is accepted at thousands of major pharmacies
                    including:
                  </p>
                  <div>
                    <img
                      alt="Walgreens"
                      height="56"
                      src="https://www.grxstatic.com/mobile/1428be2d1970fd9752ad54cba5d19a14ef9a90e1/dist/bf1149b2fadaca551aecf897e9361809.svg"
                      width="41"
                    ></img>
                    <img
                      alt="Walmart"
                      className="img-fluid"
                      height="50"
                      src="https://www.grxstatic.com/mobile/1428be2d1970fd9752ad54cba5d19a14ef9a90e1/dist/491bcb13d7c2cb08939932d91cda14b6.svg"
                      width="44"
                    ></img>
                    <img
                      alt="CVS"
                      height="44"
                      src="https://www.grxstatic.com/mobile/1428be2d1970fd9752ad54cba5d19a14ef9a90e1/dist/f096911181173e22687d1f154ee6d298.svg"
                      width="88"
                    ></img>

                    <img
                      alt="Target"
                      height="44"
                      src="https://www.grxstatic.com/mobile/1428be2d1970fd9752ad54cba5d19a14ef9a90e1/dist/6261d77eee8bb43097316089c216d165.svg"
                      width="35"
                    ></img>

                    <img
                      alt="Safeway"
                      height="45"
                      src="https://www.grxstatic.com/mobile/1428be2d1970fd9752ad54cba5d19a14ef9a90e1/dist/37723bf91073826ae5cc5842b83ace68.svg"
                      width="83"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}

// https://images.ctfassets.net/4f3rgqwzdznj/6S75t46n9f4u2odiOHH3Zy/6ec8f8e2552a7ad2ad49b8dfa7393fc2/Landing.jpg
