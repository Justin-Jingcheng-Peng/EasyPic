import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { IconButton, InfoIcon } from "@mui/material";

import React from "react";

export default class PhotoGrid extends React.Component {
  render() {
    const { photos, onDelete, searchQuery } = this.props;

    return (
      <div className="main">
        <ImageList sx={{ width: 1400, height: 700 }} cols={4} rowHeight={164}>
          {photos
            .filter((photo) => {
              return searchQuery ? photo.label === searchQuery : true;
            })
            .map((photo) => {
              return (
                <ImageListItem key={photo.id}>
                  <img
                    src={`${photo.photo_url}?w=248&fit=crop&auto=format`}
                    srcSet={`${photo.photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
