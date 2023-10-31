import './App.css';
import Heading from './components/HomePage/Heading';
import Note from './components/HomePage/Note';
import Footer from './components/HomePage/Footer';
import notes from './notes';

function App() {
  return (
    <div className="App">
      <Heading />
      {
        notes.map((note) => {
          return(
            <Note
              key = {note.key}
              title = {note.title}
              content = {note.content} 
            />
          );
        })
      }
      <Footer />
    </div>
  );
}

export default App;
