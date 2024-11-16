// // const NewsCard = ({ newsItem }) => {
// //   console.log("newsItem", newsItem);
// //   return (
// //     <section>
// //       <section className="flex">
// //         <section>
// //           <img src={newsItem?.urlToImage} alt="image">
// //           </img>
// //         </section>
// //         <section>
// //           <section>{newsItem?.title}</section>
// //           <section>
// //             <section>{newsItem?.author}</section>
// //             <section>{newsItem?.publishedAt}</section>
// //           </section>
// //           <section>{newsItem?.description}</section>
// //         </section>
// //       </section>
// //     </section>
// //   );
// // };

// // export default NewsCard;

// const NewsCard = ({ newsItem }) => {

//   return (
//     <section className="p-4 bg-white shadow-md rounded-md flex flex-col md:flex-row gap-4">
//       {/* Image Section */}
//       <section className="md:w-1/3 w-full">
//         <img
//           src={newsItem?.urlToImage || "https://via.placeholder.com/150"}
//           alt={newsItem?.title || "News Image"}
//           className="w-full h-48 md:h-full object-cover rounded-md"
//         />
//       </section>

//       {/* Content Section */}
//       <section className="flex flex-col justify-between md:w-2/3">
//         {/* Title */}
//         <section className="mb-2">
//           <h2 className="text-lg font-bold text-gray-800">
//             {newsItem?.title || "No title available"}
//           </h2>
//         </section>

//         {/* Author and Published Date */}
//         <section className="mb-4 text-sm text-gray-600 flex flex-wrap gap-2">
//           <span>{newsItem?.author || "Unknown Author"}</span>
//           <span>•</span>
//           <span>{new Date(newsItem?.publishedAt).toLocaleDateString() || "N/A"}</span>
//         </section>

//         {/* Description */}
//         <section className="text-gray-700 mb-4">
//           {newsItem?.description || "No description available."}
//         </section>

//         {/* Read More Button */}
//         <section>
//           <a
//             href={newsItem?.url || "#"}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Read Full Article
//           </a>
//         </section>
//       </section>
//     </section>
//   );
// };

// export default NewsCard;

const NewsCard = ({ newsItem, setSelectedArticle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedArticle(newsItem);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to the top
    });
  };

  return (
    <section className="p-4 border rounded shadow-md">
      <img src={newsItem.urlToImage} alt="news" className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold mt-2">{newsItem.title}</h3>
      <p className="text-sm text-gray-600">{newsItem.description}</p>
      <a
        href={newsItem.url || "#"}
        onClick={handleClick}
        className="text-blue-600 font-medium hover:underline"
      >
        Read Full Article
      </a>
    </section>
  );
};

export default NewsCard;
