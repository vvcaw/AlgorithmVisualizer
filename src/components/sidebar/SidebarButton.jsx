import {ViewListIcon} from "@heroicons/react/outline";

export function SidebarButton(props) {


    return (
        <>
            <div>
                <button
                    className="text-xl text-fontcolor pt-1.5 pb-1.5 pr-1.5 ml-6 hover:bg-hovercolor hover:font-bold hover:text-primary rounded-md w-full text-left">
                    <div className="pl-4 flex items-center">
                        <ViewListIcon className="h-6 w-6 mt-0.5 float-left"/>
                        <span className="ml-5">{props.text}</span>
                    </div>
                </button>
            </div>
        </>

    )
}