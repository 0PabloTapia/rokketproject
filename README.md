# Rokket Search
Rokket Search is an API tag based search app where users can type in whatever they would like to see, and if it exist within the API it will display all the posts which contain the specific tag the user typed in.

## How to run the app
1. Either fork or download the app and open the folder in the cli
2. Install all dependencies using `npm i` command
3. Start the web server using `npm start` command. The app will be served at http://localhost:3000/
4. Go to http://localhost:3000/ in your browser of choice and type in a search (must be in english)

## How to search
1. Click inside the text box in the page.
2. Type in something
3. Press `Launch!` and it will start searching for the specific tags and it will fetch all the posts containing it.
4. Click on `about` button in the bottom of each post if you would like to know more about that post.

## User Stories
- A User can search for whatever tag they would like to see something related to it.
- A User can click on the posts button to find more information about the post.

## Features
-Launch
  - The search function gets triggered and gets all posts containing the tag the user inputs
  - The search will display a loading spinner when fetching data
  - The button gets highlighted on mouse-over
  - All the posts fade in to the right smoothly
  - Each post has its own likes
  - Each post has a description of the post
  - Each post displays its tags

-About
  - The about button sends the user outside the app to a page with related info on the post clicked
  
  ## Future Features
  -Pagination
  -Displaying a message when the input doesn't contain existing tags in the api
  
 ## Dependencies
 - ReactJS
 - Node
 - Bootswatch
 - Font-Awesome
 - React-Icons
 - React-Spring
 
***Deployment***

## https://rokket-launcher.netlify.app


  
  
