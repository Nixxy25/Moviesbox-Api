import Home from "./routes/home/home.component";
import { Route,Routes } from "react-router-dom";
import DetailsPage from "./routes/details-page/detailspage";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/:id" element={<DetailsPage />}/>
      </Routes>
  )
}

export default App;