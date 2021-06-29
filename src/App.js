import { Route } from 'react-router-dom';
import Library from "./components/Library";
import NavMenu from "./components/NavMenu";
import Catalogue from "./components/Catalogue";
import AddForm from './components/AddForm';
import './App.css';

function App() {
  return (
    <div>
      <section id="nav-section">
        <NavMenu />
      </section>
      <main>
        <Route exact path="/">
          <Library />
        </Route>
        <Route path="/add">
          <AddForm />
        </Route>
        <Route path="/about">
          <p id="about-info"><span className="app-name">tiny library</span> is a free neighborhood-based book sharing program. Anyone can donate or take books for free.<br></br>Click on a library to browse a catalogue of the books currently in the library.<br></br>When you donate a book, use this app to update the catalogue. Follow the "Leave a Book!" link and fill out the form.<br></br>When you take a book home, click on the "Take it!" button on the individual book page to delete it from the catalogue.</p>
        </Route>
        <Route path="/library-catalogue">
          <Catalogue />
        </Route>
      </main>
    </div>
  );
}

export default App;
