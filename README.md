# My Unsplash

Unsplash clone. User can upload images (or input image URL) with labels, delete images, and view images uploaded. They can also search for photos by labels.

## Build Instructions

To install the frontend dependencies:

```bash
cd frontend
npm install
```

To setup virtual environment and install backend dependencies:

```bash
cd backend
python3 -m venv .env # We use venv, you can name the environment however you want
source .env/bin/activate # activate virtual environment
pip install -r requirements.txt # To install dependencies
```

To set up dev environment, we need two terminal instances for the backend server and frontend `webpack` server:

```bash
## Start backend server
# Make sure venv is activated
cd backend
python manage.py runserver

## Build frontend files
cd ../frontend
npm start
```

## Features

- User can create new photo by providing the photo's label and the URL.
- User can delete photos.
- Photos are displayed in a visually pleasing grid-like format.

## Credits

This project idea belongs to Thu Nghiem, founder of [devChallenges](https://devchallenges.io/). All Intellectual Property Rights belongs to Thu Nghiem. This project is an implementation of the [My Unsplash Project](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP).
