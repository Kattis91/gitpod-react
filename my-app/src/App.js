import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventFunctional from './components/EventFunctional';
// import EventClass from './components/EventClass';
// import EventBinding from './components/EventBinding';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';

function App() {
  return (
    <div className="App">
     {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" /> */}
     {/* <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/> */}
     {/* <StatefulGreetingWithCallback /> */}
     {/* <StatefulGreetingWithPrevState /> */}
     {/* <EventFunctional />
     <EventClass /> */}
     {/* <EventBinding /> */}
     {/* <ConditionalRenderingClass /> */}
     {/* <ConditionalRenderingFunctional connected={true}/> */}
     {/* <NestingComponents /> */}
     <MethodsAsPropsParent />
    </div>
  );
}

export default App;