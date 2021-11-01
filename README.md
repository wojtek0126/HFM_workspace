# HFM_workspace
This is my NX workspace.
It contains tinder movie application and express app with mock API for movie application. Made with React.js with Typescript, Theme-UI library has been used for styling. Linter, jest and cypress e2e are built in. Github actions workflow: I made three workflows, one just welcomes and lists the repo, second jest tests and lints movie app and if passed it will build and deploy it to gh-pages. Deploy is locked by user credentials. This APP has no external backend, current build on https://wojtek0126.github.io/HFM_workspace/ will be data blank. To test movie cards please run locally: clone this repo, run nx serve api and run nx serve movies. Also, here are my answers for extra questions:   
1. Usage of context provider to decouple data fetching from presentation layer. https://javascript.plainenglish.io/how-to-decouple-data-from-ui-in-react-d6b1516f4f0b and https://spin.atomicobject.com/2020/04/15/react-context-data-provider-pattern/ 

2. How to test the logic for data fetching? Instruction for fetch jest testing: https://www.youtube.com/watch?v=yTZ-txdrHdY Overall principles for fetch data testing and unit testing: https://tech.travelaudience.com/how-to-test-asynchronous-data-fetching-on-a-react-component-ff2ee7433d71


*I have created extra branch called post_sub_improvements. It does not count for recruitment task as it is implemaented after task is subscribed, however feel free to check my progress. My plans for there is implementation of fetch testing, decoupling data with context provider, using cypress e2e, making whole movies app better and more complete. I am not sure yet about using full backend. My work in post_sub_improvements will be no-pressure and I will implement here any feedback tips/issues as well.

Log:
-moved fetch GET function into useEffect
-fixed color issue on button icons
-added loading (custom react-loading) before data is rendered
-->working to implement jest fetch testing and jest testing in general<--just tutorials and specific knowledge is not enough, checking..jest docs...react testing library docs..added jest styled components..debug function to see actual tested render..snapshot to make copy of my render..next step testing mounted component..no success..installed enzyme for making it easier..fail..fail..fail..fail..cannot mount...??...somehow I have mock api working simplest possible way..jest just renders without act or mount?data hops in and test passed..need to find out why it worked?..
