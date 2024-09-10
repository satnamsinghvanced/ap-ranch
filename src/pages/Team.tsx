import Header from "../components/layout/header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { TeamsData } from "../components/consts/const";

const Team = () => {
  const navigate = useNavigate();
  const handleMemberClick = (id: any) => {
    navigate(`/team/${id}`);
  };
  // const { data, refetch }: any = useGetTeamListQuery();
  // console.log(data, "data");

  return (
    <div>
      <Header />

      <section className="team-section">
        <div className="container ">
          <h1 className="team-section-heading pt-5">the team</h1>
          <div className="row team-member">
            {TeamsData?.map((val: any, idx: any) => (
              <div
                className="col-lg-4 col-md-6 "
                onClick={() => handleMemberClick(val.id)}
              >
                <div className="team-member-list">
                  <div>
                    <div className="team-member-imgbox">
                      <img src={val.image} alt="" />
                    </div>
                    <h3 className="team-member-name">{val.name}</h3>
                    <p className="team-member-position">{val.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
