import Footer from "./component/Footer/Footer.jsx";
import Login from "./component/Login.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import SignUp from "./component/SignUp.jsx";
import { DisplayContextProvider } from "./component/State/Context.jsx";
import Section from "./component/Section.jsx";

function App() {
  return (
    <DisplayContextProvider>
      <Section >
        <Navbar />
        <SignUp />
        <Login />
        <Footer />
      </Section>
    </DisplayContextProvider>
  )
}

export default App;
