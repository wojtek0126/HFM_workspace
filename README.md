# HFM_workspace
HappyFreeMan public workspace
It contains tinder movie application and express app with mock API for movie application. Made with React.js with Typescript,uses Theme-UI library fr styling. Linter, jest and cypress e2e are built in. This workspace oses github actions workflow that jest tests and lints movie app and if passed it will build and deploy it to gh-pages. I needed constant testing so there is version of github actions workflow that is set to execute on every push to main, alongside there is another action that triggers on pull request to main branch. Deploy is locked by user credentials. This APP has no external backend, current build on https://wojtek0126.github.io/HFM_workspace/ will be data blank. To test the cards please clone this repo, install deps, run nx serve api and run nx serve movies. Answers for extra questions:   
1. Usage of context provider to decouple data fetching from presentation layer? Create context in the component where data is fetched, wrap whole app in context provider and toss returned promise data in any wrapped component where needed. It can be processed beforehand.
   It is possible with different context providers such as React's context API, redux, zustand and Recoil, probably there is more.
   By now I was sticking with recoil.js. With it, it is possible to easily capture any data including fetched from any component, process it behind the scenes in separate file,
   and retrieve processed result in any component that is wrapped in provider.

2. How to test the logic for data fetching? Using mock API, no actual network activity. However, it has to seriously think it is mounted to real API. The result has to be
	the same every time, no external conditions like CPU speed etc should be a factor that change result. Automated testing such as jest or cypress could come in handy for this task. 	
