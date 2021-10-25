import { Express } from 'express';

interface Movies {
    id: string;
    imageURL: string;
    title: string;
    summary: string;
    rating: number;
};

const movies: Movies[] =[
    {
    id: "1and3011",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    title: "Inferno",
    summary: "Lorem ipsum....",
    rating: 5.3
},
    {
    id: "2301ajj",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301qbc",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301awc",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301abc",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301abw",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301abr",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301atc",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301ubc",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301aic",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301aoc",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
{
    id: "2301pbc",
    imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",    
    title: "Star Wars: Episode VII - The Force Awakens",
    summary: "= runtime.js runtime.js.map polyfills.js polyfills.js.mapEntrypoint styles [big] = runtime.js runtime.js.map styles.js\
     styles.js.map chunk {main} main.js, main.b7a9c823517dec8a5bd0.hot-update.js, main.j",
    rating: 8.2
},
    ]
    
export function addMoviesRoutes(app: Express) {
    app.get('/api/movies', (req,resp) => resp.send(movies));
    // app.post('/api/movies', (req,resp) => resp.)
}    