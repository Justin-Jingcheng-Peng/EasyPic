const express = require("express");
const app = express();

app.get("/pictures", (req, res) => {
  let pictures = [
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
  res.send({
    pictures: pictures,
  });
});

app.listen(3001, () => {
  console.log("Port 3001");
});
