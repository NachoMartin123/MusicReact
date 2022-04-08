# MusicReact
Web application using React
# To Do
MOBILE VIEW WHEN VIEWPORT < 480


- get artist of song mediante consulta JOIN BBDD, y no por currentArtist
- lista de canciones de diferentes aristas

TEST

Usuarios?
    - admin insert new artist/song
    - update song
    - create personal list as user

Song detail view????????

Header
    - change idiom
    - logIn && sign in buttons

Home 
    ----------------------- Carrousel set size for diferent breakpoints
    ----------------------- bug padding parallax fixed
    ----------------------- resize h1 and h2 for mobile view
    ----------------------- Top artist mobile view better CSS


ArtistDetail
    - sticky header table
    - obtener artista mediante consulta de id cancion JOIN artist_id
    ------------------------ include number of song in mobile view

Footer
    ------------------------ tamaño Img footer fijo y no 80% 
    - CSS Footer <576px
    ------------------------ rewrite CSS for mobile view
       --------------------- mobile view quitar OffCanvas y botón
    - values entre >478 y <577

    - mobile view quitar < 479 (quitar y que tilte+artist=100%)
    - obtener artista mediante consulta de id cancion JOIN artist_id
    - random song buttom
    - like button (si user logged)

About
    ------------------------- CSS Common techniques, new structure 
    - buy me a coffe link
    - links to linkedIn
    - guia usuario con capturas de pantalla



Docker + MongoDB 
    persist data with images
    link reducer to BBDD


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# ReactExample
Start process
>gulp #css generation automation when change any sass
>node start #start node project
>docker-compose -f mongo.yaml up #start docker containers+volumes of data
>nodemon server/server #automate server re-starting process
