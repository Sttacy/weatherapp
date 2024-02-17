import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Catalog from "./pages/catalog";
import Main from "./pages/main";
import News from "./pages/news";
import NotFound from "./pages/not-found";
import Layout from "./pages/layout";
import NewsDetails from "./pages/newsDetails";
import { AppProvider } from "./utils/context";
import Weather from "./pages/weather";

function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="laptop-catalog" element={<Catalog />} />
            <Route path="top-news" element={<News />} />
            <Route path="weather" element={<Weather />} />

            <Route path="/news/:title" element={<NewsDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
