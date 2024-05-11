import './App.css'
import { Button } from './components/Button'

function App() {

  const handlerClick = () => {
    console.log('Hello world')
  }

  return (
    <>
      <header>
        <h1>Random Quote Machine</h1>
      </header>
      <section id='quote-box'>
        <h2 id='text'>Hola mundo</h2>
        <aside>
          <p>Author</p>
        </aside>
        <aside>
          <div className="buttons-social-media">
            <Button onClick={handlerClick}>Twitter</Button>
            <Button onClick={handlerClick}>Threats</Button>
          </div>
          <Button onClick={handlerClick}>Next Quote</Button>
        </aside>
      </section>
      <footer>By jdgonzalez</footer>

    </>
  )
}

export default App
