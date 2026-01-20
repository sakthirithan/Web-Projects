import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import '/src/index.css'

function App() {
  return (
    <>
    <Header title="React Site"/>
    <Hero 
      heading="Build Modern Websites with React" 
      text="Learn React from the ground up by building real UI" 
      btnText="Get Started"/>
    <section class="features-container">
      <Feature title="Reusabe" description="Break UI into clean Components."/>
      <Feature title="Fast" description="React updates only what changes."/>
      <Feature title="Scalable" description="Perfect for growing apps."/>
    </section>
    <Footer footerText="© 2026 ReactSite"/>
    </>
  )
}

export default App
