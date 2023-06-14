import React from "react";

function Card({ image, title, content, link, github }) {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a
          href={github}
          target="_blank"
          type="button"
          class="btn"
          style={{
            borderColor: "#B1B2FF",
            color: "#B1B2FF",
            fontWeight: "bold",
          }}
        >
          Git Hub
        </a>
        <a
          href={link}
          target="_blank"
          type="button"
          class="btn ms-2"
          style={{
            borderColor: "#B1B2FF",
            color: "#B1B2FF",
            fontWeight: "bold",
          }}
        >
          Demo
        </a>
      </div>
    </div>
  );
}

export default Card;
