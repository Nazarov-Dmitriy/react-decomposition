import React from "react";

function ListNews(props) {
  /*
   *The component is responsible for the news feed
   */
  
  const ListNewsItems = (props) => {
    console.log(props);
    return (
      <li>
        <img src={props.icons} alt="" /> <a href={props.link}>{props.text}</a>
      </li>
    );
  };

  return (
    <ul>
      {props.arrNews.map((item) => {
        return <ListNewsItems key={item.icons} {...item} />;
      })}
    </ul>
  );
}

export default ListNews;
