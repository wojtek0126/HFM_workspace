/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import * as express from 'express';
 import { addMoviesRoutes, addSingleMovieRoute } from './app/movies';
 
 const app = express();
 
 app.get('/api', (req, res) => {
   res.send({ message: 'Hello hello' });
 });
 addMoviesRoutes(app);
 addSingleMovieRoute(app);
//  addSingleMovieRouteAccept(app);
//  addSingleMovieRouteReject(app);
 
 const port = process.env.port || 3333;
 const server = app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}/api`);
 });
 server.on('error', console.error);
 