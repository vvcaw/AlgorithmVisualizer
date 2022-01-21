import {Sidebar} from './components/sidebar/Sidebar'
import {Main} from './components/main/Main'

export function App() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar col={'lg:col-span-3 col-span-12'}/>
                <Main col={'lg:col-span-9 col-span-12'}/>
            </div>
        </>
    )
}
