import { useNavigate } from "react-router-dom";
import { useGetTeamListQuery } from "../components/apis/teamApi";
import { apiBaseUrl } from "../components/consts/api-url.const";

const Team = () => {
  const navigate = useNavigate();
  const handleMemberClick = (id: any) => {
    navigate(`/team/${id}`);
  };
  const { data }: any = useGetTeamListQuery();
  if (!data) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>LOADING...</p>
      </div>
    );
  }
  return (
    <div>
      <section className="team-section">
        <div className="container ">
          <h1 className="team-section-heading">the team</h1>
          <div className="row team-member">
            {data?.map((val: any, idx: any) => (
              <div
                className="col-lg-4 col-md-6 "
                onClick={() => handleMemberClick(val?.id)}
              >
                <div className="team-member-list">
                  <div className="team-member-box">
                    <div className="team-member-imgbox">
                      <img src={`${apiBaseUrl}/${val?.image}`} alt="" />
                    </div>
                    <h3 className="team-member-name">{val?.name}</h3>
                    <p className="team-member-position">{val?.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
