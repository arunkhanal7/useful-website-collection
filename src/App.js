import Buttons from "./Buttons";
const App=() => {
    return (
      <div>
       <h1>Useful Websites</h1>
       <h3>Which website do you want to open?</h3>
            <Buttons name="Google" link="https://google.com"/>
            <Buttons name="Facebook" link="https://facebook.com"/>
            <Buttons name="Youtube" link="https://youtube.com"/>
            <Buttons name="Instagram" link ="https://instagram.com"/>
       </div>
    )
  }
export default App;