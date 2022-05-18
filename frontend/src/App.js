import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page & layout imports
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import PostDetails from "./pages/PostDetails";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <SiteHeader />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/category/:id" element={<Category />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
