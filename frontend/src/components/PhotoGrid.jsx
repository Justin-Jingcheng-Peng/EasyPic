import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://picsum.photos/id/238/200/300",
    title: "Item1",
  },
  {
    img: "https://picsum.photos/id/239/200/300",
    title: "Item2",
  },
  {
    img: "https://picsum.photos/id/240/200/300",
    title: "Item3",
  },
  {
    img: "https://picsum.photos/id/241/200/300",
    title: "Item4",
  },
  {
    img: "https://picsum.photos/id/242/200/300",
    title: "Item5",
  },
  {
    img: "https://picsum.photos/id/243/200/300",
    title: "Item6",
  },
  {
    img: "https://picsum.photos/id/244/200/300",
    title: "Item7",
  },
  {
    img: "https://picsum.photos/id/237/200/300",
    title: "Item8",
  },
];

export default function App() {
  return (
    <div className="main">
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData
          .filter((name) => name.title.includes("Item"))
          .map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}
