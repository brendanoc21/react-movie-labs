# Assignment 1 - ReactJS app.

Name: Brendan O'Connor (20098888)

## Overview.

This is a react app that uses the tmdb api to display details of movies and actors in various forms. 
You can view a list of movies that is filled with current, upcoming or top rated movies. 
These lists can be searched by name or sorted by genre. 
You can add movies to your favourites list and upcoming movies to your watchlist. 
If a movie is added to both, a purple icon will be used instead of the red or blue icons for favourites and watchlist respectively. 
You can click "More Info..." for a movie to view it's details. 
While in a movie's details you can click "Cast List" to view a list of actors from the movie. 
You can then click "More Info..." on an actor to see aditional details about them. 

### Features.
 
+ Watchlist Page and Icons
+ Top Rated Movies page
+ Movie Cast List page
+ Actor Details page

## Setup requirements.

There are no non standard setup requirements.

## API endpoints.

+ Top Rated Movies - movie/top_rated
+ Movie Credits list - movie/:id/credits
+ Actor details - person/:id
+ Actor images - person/:id/images

## Routing.

+ movies/watchlist - Display the user's watchlist
+ movies/toprated - View a list of top rated Movies
+ cast/:id - View the cast of a specific movie
+ actors/:id - Display the details on a specific actor

## Independent learning (If relevant).

I used the tmdb website to find the appropriate end points as well as the structure of responses, such as what fields are a part of "credits" and "people" (i.e. name, biography, etc). 
https://developer.themoviedb.org/reference