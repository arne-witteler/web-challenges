# List of current movies

## Value Proposition

As a movie enthusiast <br>
I want to a collection of current movies in cinema <br>
so that I can get an overview. <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- All movie cover is displayed as a list
- Each movie's rating is displayed
- Each movie's title is displayed
- An error message is displayed if something goes wrong

## Tasks

- Create component Header
- Fetch all movies with SWR in \_app.js and pass it to its children
- Create the component Movies to render a list
- Movies props: movies
- Implement error text if fetch not working
- Create the component MoviePreview
- MoviePreview props: cover, title, rating
