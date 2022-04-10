import { useState } from "react";
import Home from "./Home";
import Quiz from "./Quiz";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div style={{ overflow: "hidden" }}>
      <Home />
      <Quiz currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
