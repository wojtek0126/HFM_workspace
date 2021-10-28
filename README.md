# HFM_workspace
This is my NX workspace.
It contains tinder movie application and express app with mock API for movie application. Made with React.js with Typescript, Theme-UI library has been used for styling. Linter, jest and cypress e2e are built in. Github actions workflow: I made three workflows, one just welcomes and lists the repo, second jest tests and lints movie app and if passed it will build and deploy it to gh-pages on push to main, third does the same on pull request to main branch. Deploy is locked by user credentials. This APP has no external backend, current build on https://wojtek0126.github.io/HFM_workspace/ will be data blank. To test movie cards please run locally: clone this repo, run nx serve api and run nx serve movies. Also, here are my answers for extra questions:   
1. Usage of context provider to decouple data fetching from presentation layer. Wrap the app in context provider, create context in the component where data is fetched, capture returned data into useContext(), and use returned promise data in any wrapped component needed. Data can be processed beforehand.
   It is possible with different context providers such as React's context API, redux, zustand and Recoil, probably there is more.
   By now I was sticking with recoil.js. With it, I could easily capture any data including fetched data from any component, process it behind the scenes in separate file,
   and retrieve processed result in any component that is wrapped in provider.

2. How to test the logic for data fetching? Using mock API, no actual network activity. However, it has to seriously think it is mounted to real API. The result has to be
	the same every time, no external conditions like CPU speed etc should be a factor that change result. Automated testing such as jest or cypress could come in handy for this task. 	
