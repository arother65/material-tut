
//
import { createRoot } from 'react-dom/client';
import App from './App.js';

// global CSS file:
import '../src/scss/index.css'; 

// getting the DOM-node "<body>" from index.html to "hydrate":
const domNode = document.getElementById('root');

// https://react.dev/reference/react-dom/client/createRoot#createroot
const root = createRoot(domNode, {});
root.render(<App />);


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
