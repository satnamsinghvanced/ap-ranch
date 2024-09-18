import { useGetFacilitiesDataQuery } from "../components/apis/facilityApi";
import { apiBaseUrl } from "../components/consts/api-url.const";
const Facilities = () => {
  const { data }: any = useGetFacilitiesDataQuery();
  if (!data) {
    return null;
  }
  return (
    <div>
      <section
        className="facilities-banner"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${apiBaseUrl}/${data[0]?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          position: "relative",
          marginTop: "-80px",
          padding: " 0 16px",
        }}
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="apr-sport-name text-center">{data[0]?.name}</h1>
        </div>
      </section>

      <section className="container pt-5">
        <div className="row">
          {data[0]?.facility.map((val: any, idx: any) => (
            <div className="col-md-6 pb-5 facilities-list" key={idx}>
              <img
                src={`${apiBaseUrl}/${val?.facilityImage}`}
                alt=""
                className="img-fluid"
              />
              <p className="facility-conatnt-heading">{val?.facilityName}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
