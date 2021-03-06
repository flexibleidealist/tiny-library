import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Library from "./components/Library";
import NavMenu from "./components/NavMenu";
import Catalogue from "./components/Catalogue";
import AddForm from './components/AddForm';
import NewLibraryForm from './components/NewLibraryForm';
import BookDetails from './components/BookDetails';
import axios from "axios";
import './App.css';
import { baseURL, config } from './services';
import { sortByCreatedTime } from "./services";


function App() {
  const [books, setBooks] = useState([]);
  const [libraries, setLibraries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      const respBooks = await axios.get(`${baseURL}/tiny%20library%201`, config);
      setBooks(respBooks.data.records);
    }
    fetchBooks();
  }, [toggleFetch]);

  useEffect(() => {
    const fetchLibraries = async () => {
      const respLibraries = await axios.get(`${baseURL}/libraries`, config);
      setLibraries(respLibraries.data.records);
    }
    fetchLibraries();
    sortByCreatedTime(libraries);
  }, [toggleFetch, libraries]);

  return (
    <div>
      <section id="nav-section">
        <NavMenu />
      </section>
      <main>
      <Route exact path="/">
        <section id="library-menu-area">
            {libraries.map((library) => (
            <Library key={library.id} library={library}/>
            ))}
          </section>
        </Route>
        <Route path="/add/:id">
          <AddForm libraries={libraries} setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/about">
          <div id="about-info">
            <p><span className="app-name">tiny library</span> is a neighborhood book sharing program. Anyone can donate or take books for free.</p>
            <p>Click on a library location to browse a catalogue of the books currently in that library.</p>
            <p>When you donate a book, follow the "Leave a Book!" link, fill out the form, and click "Leave It!" to add your donation to the catalogue.</p>
            <p>When you take a book home, click the "Take It!" button on the book's details page to delete it from the catalogue.</p>
            <p>If you would like to start a new <span className="app-name">tiny library</span>, follow the New Library link and fill out the form to add your library to the menu.</p>
          </div>
        </Route>
        <Route path="/library-catalogue/:id">
          <Catalogue books={books}/>
        </Route>
        <Route path="/book/:id">
          <BookDetails setToggleFetch={setToggleFetch} books={books}/>
        </Route>
        <Route path="/new-library">
          <NewLibraryForm setToggleFetch={setToggleFetch}/>
        </Route>
      </main>
    </div>
  );
}

export default App;
