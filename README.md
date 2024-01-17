# MusicReact
Web application using React

# DEMO


# Prototypes made with Adobe XD

![Inicio – slider1](https://github.com/NachoMartin123/MusicReact/assets/25524899/c4af0c5c-d05b-49da-9d1f-720b3923c7d5)
![Artists](https://github.com/NachoMartin123/MusicReact/assets/25524899/144830ef-35dc-4753-b3ba-97893508cfb8)
![Artists– mobile](https://github.com/NachoMartin123/MusicReact/assets/25524899/13357c54-efca-4fa4-a6d8-1607d2578953)
![Artist detail](https://github.com/NachoMartin123/MusicReact/assets/25524899/d9586e34-7c16-408c-85e1-a0d959292978)
![Artist detail – mobile](https://github.com/NachoMartin123/MusicReact/assets/25524899/c4bab02a-d099-445c-97f9-23b276691331)
![About 1](https://github.com/NachoMartin123/MusicReact/assets/25524899/9fd281c7-b12f-442f-b7dd-294548b41bc0)


### De momento no está 100% dockerizado, pasos para arrancar en local
1 ) Docker arrancar contenedor que contiene el servidor con mongo DB (puesto 27017)
![image](https://github.com/NachoMartin123/MusicReact/assets/25524899/4eab4ccb-45c1-43f3-8032-a8d8023faa50)
2) Uso de mongo DB compas para realizar cambios
![image](https://github.com/NachoMartin123/MusicReact/assets/25524899/d91f660c-9cff-4196-8d2a-bbed6559097a)
3) Desde terminales para front y back, npm start (front en puerto 3000, back en puerto 5000)



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








