import logo from './logo.svg';
import './App.css';
import Books from './components/Books'
import DataBooks from './components/DataBooks'

function App() {

  const BooksComponents = DataBooks.map(book => <Books key={book.id} title={book.title} author={book.author} />)

  return (
    <div>
      {BooksComponents}
    </div>
  );
}

export default App;
