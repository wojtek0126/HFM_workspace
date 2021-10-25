/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import * as express from 'express';
 import { addMoviesRoutes, addSingleMovieRoute, addSingleMovieRouteAccept, addSingleMovieRouteReject } from './app/movies';
 
 const app = express();
 
 app.get('/api', (req, res) => {
   res.send({ message: 'Hi smelly feet, have lovely day! Aaand do not forget: your face fee is due soon, and that aint no pennies' });
 });
 addMoviesRoutes(app);
 addSingleMovieRoute(app);
 addSingleMovieRouteAccept(app);
 addSingleMovieRouteReject(app);
 
 const port = process.env.port || 3333;
 const server = app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}/api`);
 });
 server.on('error', console.error);
 