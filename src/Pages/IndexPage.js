/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <main role="main">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className=""></li>
          <li
            data-target="#myCarousel"
            data-slide-to="1"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="2" className=""></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="first-slide" src="hero1.jpg" alt="First slide" />
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Stay Informed, Stay Secure.</h1>
                <p>
                  Explore the world of cybersecurity with the latest insights
                  and updates. Our mission is to empower you with the knowledge
                  to protect yourself online.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-danger"
                    href="/login"
                    role="button"
                  >
                    Get Started
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img className="second-slide" src="hero2.jpg" alt="Second slide" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Guarding Your Digital Realm.</h1>
                <p>
                  Explore our comprehensive blog articles, providing valuable
                  insights into the latest cybersecurity threats, trends, and
                  countermeasures.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-danger"
                    href="/blogs"
                    role="button"
                  >
                    Read Blogs
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src="hero3.jpg" alt="Third slide" />
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>Elevate Your Cybersecurity Skills.</h1>
                <p>
                  Achieve cybersecurity excellence by earning certifications.
                  Our courses are designed to equip you with the skills needed
                  to defend against cyber threats.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-danger"
                    href="/cyber-attacks"
                    role="button"
                  >
                    Explore Attacks
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="blogs.png"
              alt="Blogs"
              width="140"
              height="140"
            />
            <h2>Read Blogs and Write Blogs</h2>
            <p>
              Explore the ever-changing realm of information through insightful
              blogs. Contribute your expertise, thoughts, and experiences by
              becoming a blog author by logging in, adding your unique voice to
              the ongoing conversation.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="attacks.jfif"
              alt="Attacks"
              width="140"
              height="140"
            />
            <h2>Learn about Cyber Attacks</h2>
            <p>
              Delve into the intricacies of cyber attacks, from their methods to
              preventive measures. Our curated content equips you with the
              knowledge to navigate the digital landscape securely. Stay
              informed, stay protected. We are here to help you.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="quiz.jfif"
              alt="Quizzes"
              width="140"
              height="140"
            />
            <h2>Give quizzes and Get Certified</h2>
            <p>
              Embark on a journey of knowledge assessment through our quizzes.
              Challenge yourself, enhance your skills, and pave the way for
              certification. We believe in empowering you to achieve
              cybersecurity excellence.
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className="text-danger">Did you Know? </span>
              <span className="text-muted">
                Your Data is continuously being monitored.
              </span>
            </h2>
            <p className="lead">
              Discover the hidden world of cybersecurity attacks, where threats
              lurk in the digital shadows.
            </p>
            <div className="d-inline-block">
              <Link
                className="nav-link red-underline-links text-danger"
                to="/cyber-attacks"
              >
                Explore More about Cyber Attacks
              </Link>
            </div>
          </div>

          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="Types Of Attacks"
              src="attacks-types.png"
              data-holder-rendered="true"
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              <span className="text-danger">The best way to learn? </span>
              <span className="text-muted">
                Learn from others and let other learn from you.
              </span>
            </h2>
            <p className="lead">
              Learn from the people what they have been through. Login in to
              share your experiences.
            </p>
            <div className="d-inline-block">
              <Link
                className="nav-link red-underline-links text-danger"
                to="/blogs"
              >
                View all Blogs
              </Link>
            </div>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="Blogs"
              src="cybersecurity-team.jpg"
              data-holder-rendered="true"
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              We are always here.{" "}
              <span className="text-muted">Feel free to contact us</span>
            </h2>
            <p className="lead">
              <span className="text-danger">Whatsapp:</span> +92 335-8522409
            </p>
            <p className="lead">
              <span className="text-danger">Email: </span>{" "}
              ahmed.obaid372967@gmail.com
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="Contact us"
              src="contact-us.webp"
              data-holder-rendered="true"
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
      <footer className="container">
        <p className="float-right">
          <a href="#" className="attacks-links text-danger">
            Back to top
          </a>
        </p>
        <p>
          Made with ❤ by <span className="text-danger">Farooq</span> &{" "}
          <span className="text-danger">Ahmed</span>
        </p>
      </footer>
    </main>
  );
};

export default IndexPage;
