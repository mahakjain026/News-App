// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./components/Header";
// import { useEffect, useState } from "react";
// import News from "./components/news/index.js";
// import apikey from "./components/data/config/config.tsx";
// import axios from "axios";

// function App() {
//   const [category, setCategory] = useState("general");
//   const [news, setNews] = useState([]);
//   const [newsTotalResults,setNewsTotalResults]=useState("");
//   const [selectedArticle, setSelectedArticle] = useState(null);


//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}`
//         );
//         const data = response.data;
//         setNews(data.articles);
//         setNewsTotalResults(data.totalResults);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchNews();
//   }, [category]);
//   return (
//     <section>
//       <Header setCategory={setCategory} />
//       <News news={news} newsTotalResults={newsTotalResults} />
//     </section>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import Header from "./components/Header";
import News from "./components/news/index.js";
import axios from "axios";
import apikey from "./components/data/config/config.tsx";

function App() {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [newsTotalResults, setNewsTotalResults] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null); // State to manage selected article

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}`
        );
        const data = response.data;
        setNews(data.articles);
        setNewsTotalResults(data.totalResults);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <section className="flex">
      {/* News List Section */}
      <section className={`flex-grow transition-all ${selectedArticle ? "w-2/3" : "w-full"}`}>
        <Header setCategory={setCategory} />
        <News news={news} setSelectedArticle={setSelectedArticle} />
      </section>

      {/* Article Preview Section */}
      {selectedArticle && (
        <section className="w-1/3 border-l p-4 bg-gray-100 hidden md:block">
          <h2 className="text-xl font-bold">{selectedArticle.title}</h2>
          <p className="text-sm text-gray-600">{selectedArticle.author}</p>
          <img src={selectedArticle.urlToImage} alt="article" className="my-4" />
          <p>{selectedArticle.content || selectedArticle.description}</p>
          <section className="flex justify-between items-center">

          <a
            href={selectedArticle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
            >
            Read Full Article
          </a>
          <button
            className="mt-4 p-2 bg-red-500 text-white rounded"
            onClick={() => setSelectedArticle(null)}
            >
            Close Preview
          </button>
            </section>
        </section>
      )}

      {/* Mobile Popup for Article */}
      {selectedArticle && (
        <section
          className="fixed inset-0 bg-white p-4 z-50 overflow-y-auto md:hidden"
        >
          <button
            className="mb-4 p-2 bg-red-500 text-white rounded"
            onClick={() => setSelectedArticle(null)}
          >
            Close
          </button>
          <h2 className="text-xl font-bold">{selectedArticle.title}</h2>
          <p className="text-sm text-gray-600">{selectedArticle.author}</p>
          <img src={selectedArticle.urlToImage} alt="article" className="my-4" />
          <p>{selectedArticle.content || selectedArticle.description}</p>
          <a
            href={selectedArticle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Read Full Article
          </a>
        </section>
      )}
    </section>
  );
}

export default App;
