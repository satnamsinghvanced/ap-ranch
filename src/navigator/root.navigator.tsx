import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../components/consts/routes.consts";
import Home from "../pages/Home";
import About from "../pages/About";
import Sports from "../pages/Sports";
import Contact from "../pages/Contact";
import Donate from "../pages/Donate";
import Facilities from "../pages/Facilities";
import Team from "../pages/Team";
import TeamMemberDetail from "../components/team/team-member-detail";
import ScrollToTop from "../components/scrollTop";
import OurMissions from "../components/about/our-missions";
import Forms from "../components/about/forms";
import Collaborate from "../pages/Collaborate";
import CodeOfConductForm from "../components/about/code-of-conduct";
import IndemnityAgreement from "../components/about/indemnity-agreement";
import Layout from "../components/layout/Layout";

export const RootNavigator = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SPORTS} element={<Sports />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.DONATE} element={<Donate />} />
          <Route path={ROUTES.FACILITY} element={<Facilities />} />
          <Route path={ROUTES.TEAM} element={<Team />} />
          <Route
            path={ROUTES.TEAM_MEMBER_DETAIL}
            element={<TeamMemberDetail />}
          />
          <Route path={ROUTES.OUR_MISSION} element={<OurMissions />} />
          <Route path={ROUTES.FORM} element={<Forms />} />
          <Route path={ROUTES.COLLABORATE} element={<Collaborate />} />
          <Route
            path={ROUTES.CODE_OF_CONDUCT}
            element={<CodeOfConductForm />}
          />
          <Route
            path={ROUTES.INDEMNITY_AGREEMENT}
            element={<IndemnityAgreement />}
          />
        </Route>
      </Routes>
    </>
  );
};
