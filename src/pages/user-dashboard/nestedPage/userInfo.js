import React, { Component } from "react";
import Notifications from "../Notifications";
import ProjectList from "../../../components/projects/ProjectList";
import "./userInfo.css";

class userInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero is-primary is-small">
          <div className="hero-body ">
            <div className="container has-text-centered ">
              <h1 className="title">Co-Mentoring</h1>
              <h2 className="subtitle">Dashboard</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <article className="left-container">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="medal">
                <i className="fas fa-medal">123 pts</i>
                <i className="fas fa-award">250 pts</i>
              </div>

              <div className="info">Your First Name</div>
              <div className="info">Your Last Name</div>
              <div className="info">Your Your Email</div>
              <div className="info">Your Your Password</div>
              <div className="info">Your Company Name</div>
              <div className="info">Your Company Place</div>
              <div className="info">Your skills</div>
            </div>
          </article>

          <article className="right-container">
            <div className="request div">
              <div className="info">Your First Name</div>
              <div className="info">Your Last Name</div>
              <div className="info">Your Your Email</div>
              <div className="info">Your Your Password</div>
              <div className="info">Your Company Name</div>
              <div className="info">Your Company Place</div>
              <div className="info">Your skills</div>
            </div>

            <div className="event div">
              <div className="info">Your First Name</div>
              <div className="info">Your Last Name</div>
              <div className="info">Your Your Email</div>
              <div className="info">Your Your Password</div>
              <div className="info">Your Company Name</div>
              <div className="info">Your Company Place</div>
              <div className="info">Your skills</div>
            </div>

            <div className="calendar div">
              {" "}
              <div className="info">Your First Name</div>
              <div className="info">Your Last Name</div>
              <div className="info">Your Your Email</div>
              <div className="info">Your Your Password</div>
              <div className="info">Your Company Name</div>
              <div className="info">Your Company Place</div>
              <div className="info">Your skills</div>
            </div>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default userInfo;

/* <div className="row">
<div className="col-3 menu text-is-centered">
  <ul>
    <li>
      Your Name
      <figure className="image is-128x128 is-centered">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      <div className="medal">
        <i className="fas fa-medal">123 pts</i>
        <i className="fas fa-award">250 pts</i>
      </div>
      <div className="title">Your information</div>
    </li>
  </ul>
</div>

<div className="col-3 right">
  <div className="aside">
    <h2>What's your Name</h2>
    <p>Duc NGuyen</p>
    <h2>Where are you from?</h2>
    <p>VietNam</p>
    <h2>How did you come in France?</h2>
    <p>With my Parents when I was a kid</p>
  </div>
</div>
</div> */
