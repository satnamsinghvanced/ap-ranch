import { useGetMissionsDataQuery } from "../apis/missionsApi";
import DOMPurify from "dompurify";

const OurMissions = () => {
  const { data }: any = useGetMissionsDataQuery();
  if (!data) {
    return null;
  }
  const description = DOMPurify.sanitize(data[0]?.description);
  return (
    <div>
      <section className="about-banner ">
        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-lg-6 p-0  our-missions-page">
              <div className="our-missions-page-content ">
                <h1 className="about-page-heading">{data[0]?.name}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="about-page-para"
                  style={{ fontFamily: "Satoshi" }}
                />
                <br />
                {/* <p className="about-page-para">
                  As a society, wisdom and experience has taught us to view
                  education as the great equalizer. To succeed as individuals
                  and as a nation in an ever-changing and highly-technical
                  world, we believe all youth should aspire to obtaining a
                  college degree. Most people have seen or experienced
                  first-hand that the “one size fits all” approach to success is
                  resulting in far too many youth falling between the cracks,
                  with the majority being youth of all ethnic backgrounds of low
                  socio-economic status.{" "}
                </p>
                <p className="about-page-para">
                  Positive youth development theorists speak about the value of
                  providing youth a voice. We believe that it is equally
                  important to provide them choice. For youth who have access to
                  fewer resources, fewer engaged adults in their lives and less
                  confidence in their capacity to positively influence their
                  environment, the introduction of choice can have a powerful
                  and positive impact on both engagement and retention. The
                  chances of increasing retention and achievement among high
                  school and college students are significantly improved by
                  individual relationships with caring adults who have great
                  expectations and high standards, a sense of membership and
                  positive peer culture and an opportunity to develop academic
                  and athletic skills. Success also depends on attention to the
                  time youth are not in school and recognition of the important
                  role that community-based organizations play in creating a
                  sense of connectedness for them and their families by offering
                  structure for and interest in, their athletic and academic
                  success.
                </p>
                <p className="about-page-para">
                  Accordingly, we have designed and implemented program
                  strategies that ensure equal access to post- secondary
                  achievement that will increase the number of
                  socio-economically disadvantaged youth enter and flourish in
                  college. We support the creation of alternative learning
                  environments that offer early exposure to the world of work,
                  that combine academic support, and those that bridge secondary
                  and post-secondary educational systems. By expanding the
                  landscape of substantive and rewarding options available to
                  our community’s youth, they will be better equipped with the
                  skills and experience to make informed choices about their
                  future.
                </p>
                <p className="about-page-para ">
                  The scope of this plan is ambitious and broad. As with any
                  planning document, the strategies and actions that have been
                  set out to accomplish our organization’s goals will require
                  constant monitoring and revisions. Revisions will be based on
                  objective and comprehensive assessment of progress and
                  participant needs. This Plan is much more complex than a
                  traditional organizational strategic plan, as we are
                  attempting to provide programming at a level of service like
                  no other; focusing both on academic enrichment and athletic
                  skill development which will positively impact on our entire
                  community. The vision is compelling and the stakes are high.
                  Our young people and our community members deserve nothing
                  less.
                </p> */}
              </div>
            </div>

            <div className="col-lg-6 p-0 our-missions-page  ">
              <div className="d-flex justify-content-center ">
                <h3 className="upcoming-event-heading mt-3">Upcoming Events</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMissions;
