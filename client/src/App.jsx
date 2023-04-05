import Header from "./components/Header";
import BloggyRoutes from "./routes";
import "./styles/style.css";
const App = () => {
  return (
    <main className="container">
      <Header />
      <BloggyRoutes />
    </main>
  );
};

export default App;
