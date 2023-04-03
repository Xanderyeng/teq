import { Navbar, Hero, Courses, Success, Contact, Footer } from "./components";

const App = () => {
  return (
      <div className='relative z-0'>
        <Navbar />
        <Hero />
        <Courses />
        {/* <Success /> */}
        <Contact />
        <Footer />
      </div>
  );
};

export default App;
