# EasyPic

In the current market, there are numerous gallery app that allow us to upload pictures by dragging pictures from our local documents, like VSCO. However, in some cases, we need to use the pictures directly from the internet. For example, if I want to convince my parents for a trip to Montreal, I need to find as many beautiful pictures as I can to show them how it is worth to do that. Another example could be when we want to make a collection gallery of our favourite basketball player, we don’t have their pictures in our documents, but we can find tons of their pictures on Google. In both cases we listed above, EasyPic can easily solve these issues. EasyPic allows us to upload pictures directly from anywhere on the internet by copying their URLs. The whole process wouldn’t take longer than 5 seconds. Then, our application will store these pictures in the database and you can visit them anytime you want.

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
