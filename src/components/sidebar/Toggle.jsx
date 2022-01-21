export const Toggle = (props) => (
    <>
        <button onClick={props.toggle}
                className="w-14 h-14 border border-2 border-subfontcolor rounded-md flex justify-center items-center focus:bg-subfontcolor lg:hidden">
            {props.children}
        </button>
    </>
)