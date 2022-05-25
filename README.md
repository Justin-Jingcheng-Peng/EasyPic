# My Unsplash

Unsplash clone. User can upload images (or input image URL) with labels, delete images, and view images uploaded. They can also search for photos by labels.

## Build Instructions

To install the frontend dependencies:

```bash
cd frontend
npm ci # This will do a clean install
```

## User Stories

- User story: I can see a list of photos in the masonry layout that I have added
- User story: I can add a new photo to the list - the new photo should be on top of the list
- User story: I can search for photos by label
- User story: When I hover a photo, I can see a label and a delete button
- User story: I can delete images

## Tasks to do

- [ ] Create the main `App` component which contains the `NavBar` and the `PhotoGrid` components.
- [ ] Create the `NavBar` component which contains the logo of the web app, search bar, and Add a Photo button.
- [ ] Create the `PhotoGrid` component to displays the photos in a grid-like fashion.
 - [ ] Create fake database with JSON file containing fake photos
- [ ] Add style for React components (if not already)
- [ ] Set up MongoDB.
- [ ] Create a database model for the Photos.
- [ ] Create a REST API for the CRUD Photos
 - [ ] GET: for the frontend to display photo.
 - [ ] POST: for creating new photos.
 - [ ] DELETE: for deleting photos.

### Tasks to be completed after the main tasks above are done

- [ ] Requires user account if they want to upload image. All users should be able to view the images, but only users with accounts can upload and delete their own images.
- [ ] Set up CI/CD pipeline with GitHub Actions. This is great to know and essential before deploying our app.
- [ ] Deploy the app with Docker (?) and host the app with services like Netlify.

## Credits

This project idea belongs to Thu Nghiem, founder of [devChallenges](https://devchallenges.io/). All Intellectual Property Rights belongs to Thu Nghiem. This project is an implementation of the [My Unsplash Project](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP).
