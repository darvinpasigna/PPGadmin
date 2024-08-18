import { Route, Routes } from 'react-router-dom';
import AdminDash from './pages/AdminDash';
import AddProd from './pages/AddProd';
import PC from './pages/PC';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDash />} />
      <Route path="/addproduct" element={<AddProd />} />
      <Route path="/PC" element={<PC />} />
    </Routes>
  );
}

export default App;
