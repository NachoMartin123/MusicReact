# MusicReact
Web application using React

### `make build`
build the docker images for backend, frontend and mongodb. 

### `make up`
runs the docker images with command "docker-compose up"

### To Do
MOBILE VIEW WHEN VIEWPORT < 480

- get artist of song mediante consulta JOIN BBDD, y no por currentArtist
- lista de canciones de diferentes aristas ??? ==> lista de me gusta de usuario / crear lista

TEST
    - UNIT TEST:  A unit might be an individual function, method, procedure, module, or object. A unit test isolates a section of code and verifies its correctness
    - COMPONENT TEST: Tests are performed on each component in isolation from other components. Generally, React applications are made up of several components, so component testing deals with testing these components individually.
    - SNAPSHOT TEST: A snapshot test makes sure that the user interface (UI) of a web application does not change unexpectedly. It captures the code of a component at a moment in time, so that we can compare the component in one state with any other possible state it might take.

Heroku autodeploy

docker-compose volumes para actualizar cambios de codigo (cuando se instalan nuevos paquetes hay que generar las imagenes de nuevo)

Usuarios?
    - admin insert new artist/song
    - update song
    - create personal list as user

Song detail view????????

Header
    - change idiom
    - logIn && sign in buttons

Home 
    - animate.css add animations onScroll 
    
ArtistDetail
    - sticky header table
    - obtener artista mediante consulta de id cancion JOIN artist_id
    
Footer
    - obtener artista mediante consulta de id cancion JOIN artist_id
    - random song buttom
    - like button (si user logged)


About
    - buy me a coffe link
    - Fill About parts

Default no found view



Docker + MongoDB 
    persist data with images
    link reducer to BBDD


