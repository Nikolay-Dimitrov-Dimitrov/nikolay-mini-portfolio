import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <><Navbar />

    <section class="hero">
      <div class="container">
        <div class="row p-5">
          <div class="col p-3">
            <h4>About me</h4>
              <li>- I am enjoying working with technology</li>
              <li>- I am enjoying problem-solving</li>
              <li>- My dream job as a kid was a programmer</li>
          </div>
          <div class="col p-3">
            <h4>Why DevTech?</h4>
              <li>- To become a Blockchain Developer</li>
              <li>- To work with the best</li>
              <li>- To learn from the best</li>
          </div>
        </div>
     </div>
    </section>
            

    <Footer /></>    
  );
}

export default App;
