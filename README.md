# Companion
#### Imagine this: you're curled up on the couch, Netflix on, and me by your side, ready to give you awesome movie recommendations✨
#### It's like having your own personal movie buddy and AI assistant rolled into one! 🤯

## Features(To do list):
- [X] Configuring the project with vite, tailwind, shadcn
- [X] Setting up the Routing using React Router DOM
- [X] Login and Sign up Page
    - [X] Creating the Page
    - [X] Adding the Functionality
- [X] Forgot Password Page
    - [X] Creating the Page
    - [X] Adding the Functionality
- [X] Form Handling and Validation using React Hook Form (RHF)
    - [X] Installing and setting up RHF into the Project
    - [X] Managing the data using RHF
    - [X] Performing Form validation using RHF
    - [X] Both Login and Forgot Password Page
- [X] Installing and Integration React hot notifications into the project
- [X] Setting up Firebase for the project
    - [X] Setting and configuring the project in firebase
    - [X] Creating the Sign up and Log in Functionality
    - [X] Creating the forgot password Functionality
- [X] Configuring Redux ToolKit for state management
    - [X] Installing the dependencies
    - [X] Creating the app store
    - [X] Connecting the app store to the application
    - [X] Creating the user slice to store the user data
    - [X] Adding the user data from the sign in / sign up
    - [X] Removing the user data while signing out
- [X] Modifying the Header component in browse
    - [X] Adding the user icon along with drop down
    - [X] Drop down should contain account setting 
    - [X] Implement the sign out feature
        - [X] should show alert box with a creative message
        - [X] On clicking it navigate to log in page.
- [X] Giving Proper Layout and Structure
    - [X] Structuring the Files according to component, utils, layouts and pages
    - [X] Defining Proper Layout for the pages
- [ ] Setting up Protected Routes 
    - [X] Redirects the user to login page, session expires
    - [X] Redirects the user to main page, session is active
- [X] Good practices
    - [X] Unsubscribing to on auth state change in useEffect to remove event listeners
- [X] Integrating TMDB into the project
    - [X] Creating an application and fetching the access token
    - [X] fetching the now playing movies using access token
    - [X] Creating a movie slice in redux store and adding now playing movies
    - [X] Adding Trending movies to the movie list
- [X] Creating custom hooks
    - [X] Now playing movies
    - [X] Trending movies
    - [X] Background trailer videos
- [ ] Creating the browse page
    - [X] Main container (Trending movies)
        - [X] Video title , description
        - [X] Trailer in the background
    - [ ] Secondary container
     - [ ] Movie cards * n
     - [ ] each movie card => m movies
- [ ] Trending movie section
    - [ ] Trailer in Background
    - [ ] Title and Description
- [ ] Movie Recommendation
    - [ ] a list of movies based on categories


Optional:
- [ ] Add the option to Login with Google
- [ ] Settings page for users


## Learning through challenges:

#### These are all the issues that I encountered while implementing the project:
- 🤦‍♀️ Problem in forgot password feature (validation needed else it sends mail to everyone)
    - Tried implementing it using firestore (bad idea => not meant for that purpose, strict security rules)
    - Better approach: Try using mongo DB or any other database for this purpose
- 📋 Handling form validation of multiple input fields, 
    - custom form validation is awesome for small input cases , but for multiple validations you need better options
    - Found out React hook form, Learned about it and implemented validation using React hook forms.
    - Another alternative: Formik (Not explored it enough to say about it)
- 🤝🏻 Tried to implement the remember me feature in log in 
    - while looking out for it , I come to know firebase by default provides this option
    - 🍪 Explored about cookies and need for cookies
- Tried to implement a drop down along with alert box (had issues with state) - after drop down closes , alert automatically closes (shadcn-ui).
    - [X] Solved the issue by sperating log out button
- How to fetch the trailer videos from the TMDB API and display on the page
    - solved by reading the documentation of api
-🎮 Playing the trailer videos on loop 
    - initially setted up video playing with iframe => React player
    - struggle a lot to make react player to aspect ratio w-100
    - inconsistency in movie displaying different movie rendered and different movie displayed
- 🛒 Tried using Redux ToolKit for state management 
    - 📌 Forgot about the data flow, had to go through it again
- 🛡️ Need of .env file to store the api keys
    - your api keys should be protected, so I created env file to store the api keys
    - There is a specific way of doing it for vite, refer the vite dox on env variables.
- 📽️ Tried my best to integrate random videos when user logs in
    - faced issue with inconsistency in data
    - showed random title and random video
    - rather solving in the client side => solved in the backend part