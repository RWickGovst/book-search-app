import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

// Got help building this app from:
// https://learnwithparam.com/blog/learn-react-hooks-by-building-books-search/

let API_url = 'https://www.googleapis.com/books/v1/volumes';

const App = () => {
const [books, setBooks] = useState({ items: [] });

// searches google for the book
const fetchBooks = async () => {
  const result = await axios.get(`${API_url}?q=${term}`);
  console.log(result.data);
  setBooks(result.data);
}

// call the function to search upon submit
const onSubmit = (e) => {
  e.preventDefault();
  fetchBooks();
} 

// const App = () => {
    const [term, setSearchTerm] = useState('');
    const onInputChange = (e) => {
      setSearchTerm(e.target.value);
    }
  
  return (
    <section>
      <form onSubmit={onSubmit}>
     
        <label>
          <span>Book Search</span>
          <input
            type="search"
            placeholder="what you looking for"
            value={term}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
        </label>
     
      </form>
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    {/* authors  */}
                    {/* description */}
                    {/* image */}
                    {/* link */}
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};
//  for more than one author
// const bookAuthors = authors => {
//   if (authors.length <= 2) {
//     authors = authors.join(' and ');
//   } else if (authors.length > 2) {
//     let lastAuthor = ' and ' + authors.slice(-1);
//     authors.pop();
//     authors = authors.join(', ');
//     authors += lastAuthor;
//   }
//   return authors;
// };

export default App;