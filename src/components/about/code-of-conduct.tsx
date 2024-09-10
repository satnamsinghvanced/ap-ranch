import React from "react";
import Header from "../layout/header";
import Footer from "../../pages/Footer";

const CodeOfConductForm = () => {
  return (
    <div>
      <Header />
      <section className="indemnity-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="indemnity-heading">
                Parent’s Code of Conduct Agreement
              </h2>
              <p className="about-indemnity mb-3">
                Your child is participating in a youth track program at the
                Athletic Performance Ranch. Participation in this program is
                very valuable to the development of children. Aspects of
                teamwork, dedication, discipline, physical fitness, self-esteem
                and fair play all contribute to the overall growth and
                maturation of young people. We are an organization whose goals
                are to instill these values/qualities in all participants
                regardless of individual athletic ability or the outcome.
              </p>
              <p className="about-indemnity">
                Your role as a spectator has a significant impact upon the
                success of our program. Therefore, we need you to fully
                understand and completely accept the standards of behavior
                detailed below.
              </p>
              <div className="indemnity-agreement">
                <p className="about-indemnity mb-3">I therefore agree:</p>
                <ol>
                  <li>
                    I will remember that children participate to have fun and
                    that the track program is for youth and not adults.
                  </li>
                  <li>
                    I understand that children play sports to have fun, make
                    friends, and to learn new skills; therefore, I will praise
                    effort as well as execution in order to keep sports in the
                    proper perspective.
                  </li>
                  <li>
                    I will inform the coach of any physical disability or
                    special needs that may affect the safety of my child or the
                    safety of others.
                  </li>
                  <li>
                    I will learn the rules of the sport and the policies of AP
                    Ranch.
                  </li>
                  <li>
                    I (and my guests) will be a positive role model for my child
                    and encourage sportsmanship by showingrespect and courtesy,
                    and by demonstrating positive support for all athletes,
                    coaches, officials andspectators at every meet.
                  </li>
                  <li>
                    I (and my guests) will not engage in any kind of
                    unsportsmanlike conduct with any official, coach, athlete or
                    parent such as booing or taunting, or using profane language
                    or gestures.
                  </li>
                  <li>
                    I will not encourage any behaviors or practices that would
                    endanger the health and wellbeing of the athletes.
                  </li>
                  <li>
                    I will teach my child to play by the rules and to resolve
                    conflicts without resorting to hostility or violence.
                  </li>
                  <li>
                    I will demand that my child treat other athletes, coaches,
                    officials, and spectators with respect.
                  </li>
                  <li>
                    I will praise my child for competing fairly and trying hard.
                  </li>
                  <li>
                    I will promote the physical and emotional well-being of the
                    athletes ahead of any personal desire I may have for my
                    child to win
                  </li>
                  <li>
                    I will respect the officials and their authority during
                    meets and will never question, discuss or confront coaches
                    at the meet and will take time to voice my concerns later
                    with the coach.
                  </li>
                  <li>
                    I will demand a sports environment for my child that is free
                    from drugs, tobacco and alcohol and I will refrain from
                    their use at all sporting events.
                  </li>
                </ol>
              </div>
              <p className="about-indemnity">
                I fully understand and completely accept the standards of
                behavior outlined. My signature below will serve as my public
                acknowledgment of my unconditional agreement with each standard
                contained in this document.
              </p>
              <p className="about-indemnity">
                I realize that if at any time my behavior becomes non-compliant
                with any of these standards this could potentially jeopardize my
                child’s opportunity to participate in the track youth program.
              </p>

              <form action="" className="pt-5 row align-items-end">
                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Printed Name of Student/Participant
                    </label>
                    <input type="text" className="contact-from-input" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">Age Division</label>
                    <input type="text" className="contact-from-input" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">Age Division</label>
                    <input type="date" className="contact-from-input" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Signature of Parent or Legal Guardian (print you name)
                    </label>
                    <input type="text" className="contact-from-input" />
                  </div>
                </div>
              </form>
              <div className="col-md-12 d-flex justify-content-end">
                <button className="send-btn">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CodeOfConductForm;
