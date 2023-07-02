import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import { PageContent } from "./components/PageContent";

function App() {
  return (
    <BrowserRouter>
      <PageContent />
    </BrowserRouter>
  );
}

export default App;
