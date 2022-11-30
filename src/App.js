import { Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <AllMeetups />
      </Route>
      <Route path="/new-meetups">
        <NewMeetups />
      </Route>
      <Route path="/favo">
        <Favorites />
      </Route>
    </Layout>
  );
}

export default App;
