import publicRoutes from "./routes";
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      {publicRoutes.map((page, id) => {
        let Page = page.component;
        return (
          <Route key={id} path={"/NetflixClone" + page.path} element={<Page />} />
        )
      })}
    </Routes>
  );
}

export default App;
