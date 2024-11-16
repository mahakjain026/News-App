// import NewsCard from "./newsCard";

// const News = ({news ,newsTotalResults}) => {
//   return (
//     <>
//       {news.map((newsItem) => (
//         <NewsCard newsItem={newsItem} key={newsItem.title} />
//       ))}
//     </>
//   );
// };

// export default News;

import NewsCard from "./newsCard";

const News = ({ news, setSelectedArticle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((newsItem) => (
        <NewsCard
          newsItem={newsItem}
          key={newsItem.title}
          setSelectedArticle={setSelectedArticle}
        />
      ))}
    </div>
  );
};

export default News;
