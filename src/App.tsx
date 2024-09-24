import './App.css'
import { Header } from 'layout/header/Header'
import { Main } from 'layout/sections/main/Main'
import { Skills } from 'layout/sections/skills/Skills'
import { Works } from 'layout/sections/works/Works'
import { Contacts } from 'layout/sections/contacts/Contacts'
import { Footer } from 'layout/footer/Footer'
import { Particle } from 'components/particle/Particle'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable={false}
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
        theme={'dark'}
        transition={Bounce}
      />
    </div>
  )
}

export default App
