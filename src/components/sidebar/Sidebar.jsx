import {Logo} from "./logo";
import {SubHeader} from "./SubHeader";
import {SidebarButton} from "./SidebarButton";

export function Sidebar(props) {
    return (
        <>

            <div className={`bg-white h-screen pr-12 ${props.col}`}>
                <div className="pl-10 pt-10">
                    <Logo/>
                    <SubHeader text={"SORTING"} style={"mt-14 mb-5"}/>
                </div>

                <SidebarButton text={"Quick Sort"}/>
                <SidebarButton text={"Bubble Sort"}/>
                <SidebarButton text={"Radix Sort"}/>
                <SidebarButton text={"Merge Sort"}/>

                <div className="pl-10">
                    <SubHeader text={"TREE"} style={"mt-10 mb-5"}/>
                </div>

                <SidebarButton text={"Binary Tree"}/>
                <SidebarButton text={"AVL Tree"}/>


            </div>
        </>

    )
}