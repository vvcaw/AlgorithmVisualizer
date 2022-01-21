import {Logo} from "./logo";
import {SubHeader} from "./SubHeader";
import {SidebarButton} from "./SidebarButton";
import {Toggle} from "./Toggle";
import {useState} from "preact/compat";
import {XIcon} from "@heroicons/react/outline";
import {MenuAlt4Icon} from "@heroicons/react/outline";

export function Sidebar(props) {

    const [isToggled, setIsToggled] = useState(false)

    const toggle = () => {
        setIsToggled(!isToggled)
    }

    const Hierarchy = () => {
        return (
            <>
                <SubHeader text={"SORTING"} style={"mt-14 mb-5 pl-10"}/>
                <SidebarButton text={"Quick Sort"}/>
                <SidebarButton text={"Bubble Sort"}/>
                <SidebarButton text={"Radix Sort"}/>
                <SidebarButton text={"Merge Sort"}/>

                <div className="pl-10">
                    <SubHeader text={"TREE"} style={"mt-10 mb-5"}/>
                </div>

                <SidebarButton text={"Binary Tree"}/>
                <div className="mb-5">
                    <SidebarButton text={"AVL Tree"}/>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={`bg-white lg:h-screen h-auto lg:pb-0 lg:pr-12 pr-10 ${props.col}`}>
                <div className="pl-10 lg:pt-10 pt-3 pb-3">
                    <div className="flex justify-between">
                        <Logo/>
                        <Toggle toggle={toggle}>
                            {isToggled &&
                                <XIcon className="w-14 h-14 text-fontcolor"/>
                            }

                            {!isToggled &&
                                <MenuAlt4Icon className="w-14 h-14 text-fontcolor"/>
                            }
                        </Toggle>
                    </div>
                </div>

                <div className="lg:block hidden">
                    <Hierarchy/>
                </div>

                {isToggled &&
                    <div className="block lg:hidden">
                        <Hierarchy/>
                    </div>
                }
            </div>
        </>
    )
}