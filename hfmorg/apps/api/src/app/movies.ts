import { Express } from 'express';

export interface Movies {
    id: string;
    imageURL: string;
    title: string;
    summary: string;
    rating: number;
};

const movies: Movies[] =[
    {
    id: "1",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Inferno",
    summary: "Lorem ipsum....",
    rating: 5.3
},
    {
    id: "2",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "3",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "4",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "5",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "6",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "7",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "8",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "9",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "10",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "11",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "12",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
    ];

const accepted: any = [];

const rejected: any = [];  

export const getAllMovies = () => movies;
export const getMovie = (id: string) => movies.find((movie: any) => movie.id === id);    
    
export function addMoviesRoutes(app: Express) {
    app.get('/api/movies', (req,resp) => resp.send(movies));   
};   

export function addSingleMovieRoute(app: Express) {
    app.get('/api/movies/:id', (req,resp) => resp.send(getMovie(req.params.id)));   
}; 

export function addSingleMovieRouteAccept(app: Express) {
    app.get('/api/movies/:id/accepted', (req,resp) => resp.send(getMovie(req.params.id)));   
};

export function addSingleMovieRouteReject(app: Express) {
    app.get('/api/movies/:id/rejected', (req,resp) => resp.send(getMovie(req.params.id)));   
};