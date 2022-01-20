import { Logo } from './pages/logo'

export function App(props) {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          className="bg-background"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
        <p>
            <a
                className="bg-hovercolor"
                href="https://preactjs.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn Preact
            </a>
        </p>
    </>
  )
}
