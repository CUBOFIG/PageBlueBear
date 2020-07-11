import React from "react";

import "./Home.css";

const Home = () => (
  <>
    <section
      id="/hola"
      className="text-white d-flex justify-content-center align-items-center HImg u-eiScreen p0
    "
    >
      <div className="container ">
        <div className="row">
          <article className="col-12 col-lg-4 d-none d-md-block">
            <img
              src={require("../../../components/IMG/kisspng-computer-programming-programmer-programming-langua-bear-mascot-5b4dd74cb2d5a6.9058868515318280447325.png")}
              alt="web"
              className="img-fluid"
            />
          </article>

          {/* MOVIL */}

          <article className="col-12 d-block d-md-none">
            <div className=" d-flex justify-content-center align-items-center">
              <img
                src={require("../../../components/IMG/kisspng-computer-programming-programmer-programming-langua-bear-mascot-5b4dd74cb2d5a6.9058868515318280447325.png")}
                alt="web"
                className="img-fluid2"
              />
            </div>
          </article>

          {/* MOVIL */}

          <div className="col-lg-1  "></div>
          <article className="col-12 col-lg-7 pl-5 ">
            <h2 className="J-t d-none d-md-block">
              Conoce a <b>GRIZZLY</b>
            </h2>
            <h3 className="d-none d-md-block">
              el nuevo sistema de aprendizaje.{" "}
            </h3>

            <h4 className=" pt-4 ">
              <b className="tp d-none d-md-block">
                Aprende, enseña y reinventa con GRIZZLY
              </b>
            </h4>
            <p className="pt-1 u-flowText d-none d-md-block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              accusantium odio reiciendis corporis? Ad alias repudiandae
              mollitia optio architecto voluptatem, animi sed consectetur eius,
              iusto totam officiis corrupti laudantium cupiditate?
            </p>
            <div className="d-flex pt-4  ">
              {/* <a
                href="#Servicios"
                className="btn btn-lg active pt-4 bg-succes text-white border-0 "
                role="button"
                aria-pressed="true"
              >
                Sí, ¡Empecemos!
              </a> */}
              <article className="d-none d-md-block">
                <img
                  src={require("../../../components/IMG/des1.png")}
                  alt="web"
                  className="mm2 "
                />
              </article>
              <article className="d-none d-md-block pl-3">
                <img
                  src={require("../../../components/IMG/des2.png")}
                  alt="web"
                  className="mm "
                />
              </article>
            </div>

            {/* MOVIL */}

            <div className="d-flex pt-2 d-block d-md-none justify-content-center align-items-center ">
              {/* <a
                href="#Servicios"
                className="btn btn-lg active pt-4 bg-succes text-white border-0 "
                role="button"
                aria-pressed="true"
              >
                Sí, ¡Empecemos!
              </a> */}

              <div className="d-flex pt-2 justify-content-center align-items-center "></div>
              <article>
                <img
                  src={require("../../../components/IMG/des1.png")}
                  alt="web"
                  className="mm2 "
                />
              </article>
              <article className="pl-3 ">
                <img
                  src={require("../../../components/IMG/des2.png")}
                  alt="web"
                  className="mm "
                />
              </article>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section
      id="sitios"
      className="text-white d-flex justify-content-center align-items-center bg-me u-fullScreen mt-5 p0
    "
    ></section>
    <section
      id="sitios"
      className="text-white d-flex justify-content-center align-items-center HImg u-fullScreen p0
    "
    ></section>
    <section
      id="sitios"
      className="text-white d-flex justify-content-center align-items-center bg-me u-fullScreen mt-5 p0
    "
    ></section>
  </>
);

export default Home;
