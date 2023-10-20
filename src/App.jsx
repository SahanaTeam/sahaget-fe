import Footer from "./components/footer";
import Dropdown from "./components/dropdown";
function App() {
  return (
  <>
    <div className="App row">      
      <div className="col-12">
        <div className="text-center">
          <h1>Report what you found or lost</h1>
          <br/>
          <p>
            <a href="#" className="btn btn-success btn-lg">Get Started</a>
          </p>
          <Dropdown></Dropdown>
        </div>                  
      </div>
    </div>
    <Footer></Footer>
  </>
  );
}

export default App;
