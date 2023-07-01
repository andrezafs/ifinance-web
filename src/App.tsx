import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
