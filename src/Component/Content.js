import React from "react";

// Content
const Content = (props) => (
  <section className="content-wrapper">
    {props.celebrants.map((celebrant) => {
      const { id, avatar, name, year } = celebrant;
      console.log(avatar, celebrant);
      return (
        <div key={id} className="content">
          <div className="avatar-wrapper">
            <img
              /*The url suppose to be send from Server */
              src={`http://127.0.0.1:5000/api/birthday_celebrants/${avatar}`}
              alt={name}
              width="200"
            />
          </div>
          <div className="user-content">
            <h3>{name}</h3>
            <span>{year} years</span>
          </div>
        </div>
      );
    })}
  </section>
);

export default Content;
