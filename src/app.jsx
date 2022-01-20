import { Sidebar } from './components/sidebar/Sidebar'
import { Main } from './components/main/Main'

export function App() {
  return (
    <>
        <div className="grid grid-cols-12">
            <Sidebar col={'col-span-3'} />
            <Main col={'col-span-9'} />
        </div>
    </>
  )
}
