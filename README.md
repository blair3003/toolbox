# Toolbox

Toolbox is an Ecommerce application, built using the Next JS framework with Firebase Authentication and Firestore Database, and hosted on Vercel.

[https://toolbox-five.vercel.app/](https://toolbox-five.vercel.app/)
 
## The App

The application uses the Next JS app router pattern with React Context to provide state management. Data is stored in a Firebase Firestore document database, with product images served from the application public folder. Authentication is managed by Firebase Auth and the application itself is hosted in Vercel.

## Features

Features of the app include:

- **Product Sort & Filter** - Products can be filtered and sorted using UI controls.
- **React Toast Popups** - Popups notifications provided by React Toast indicate updates to the cart and favorites.
- **Firestore Database** - Data is stored as collections of documents in the no-SQL Firestore Database.
- **Account Cart Preserved** - Carts are stored with the user's account or in local storage if not signed in.
- **Authentication** - User account management is handled by Firebase Authentication with the option to sign in with Google.
- **Dark Mode Toggle** - Users can toggle the Dark Mode theme of the application with the click of a button.
