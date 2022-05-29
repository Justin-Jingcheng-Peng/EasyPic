import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React from "react";

export default class PhotoGrid extends React.Component {
  render() {
    const { photos, onDelete, searchQuery } = this.props;

    return (
      <div className="main">
        <ImageList
          sx={{
            width: 500,
            height: 450,
          }}
          cols={3}
          rowHeight={164}
        >
          {photos
            .filter((photo) => {
              return searchQuery ? photo.label === searchQuery : true;
            })
            .map((photo) => {
              return (
                <ImageListItem key={photo.id}>
                  <img
                    src={photo.photo_url}
                    srcSet={photo.photo_url}
                    loading="lazy"
                    alt={photo.label}
                  />
                  <ImageListItemBar position="below" title={photo.label} />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => onDelete(photo)}
                  >
                    Delete
                  </Button>
                </ImageListItem>
              );
            })}
        </ImageList>
      </div>
    );
  }
}
