import {BubbleSortRun} from './BubbleSortRun'
import {BubbleSortRenderer} from "./BubbleSortRenderer";
import {gsap} from "gsap";
import {useRef} from "preact/compat";

export function BubbleSort(props) {
    const boxRef = useRef();
    const boxRef1 = useRef();

    const asdf = () => {


        let t = boxRef.current.getBoundingClientRect().y
        let a = boxRef1.current.getBoundingClientRect().y

        let b = t - a
        let c = a - t
        console.log(b)
        //animate ".box" from an opacity of 0 to an opacity of 0.5
        gsap.from(".green", {y: b});

        gsap.from(".blue", {y: c});
        //gsap.to(boxRef.current, {rotation: "+=360"});

    }


    return (
        <>
            <div className="p-4 w-full lg:h-2/4 h-64 md:h-96 rounded-lg bg-white shadow-md">
                <BubbleSortRenderer/>
            </div>

            <div className="p-4 w-full lg:h-28 h-auto rounded-lg bg-primary shadow-md">
                <BubbleSortRun/>
            </div>

            <button onClick={asdf}>asfd</button>


            <div class="green" style="width: 100px;
  height: 100px; background-color:#fff454 " ref={boxRef1}/>
            <div class="blue" id="123" style="width: 100px;
  height: 100px; background-color:#ff2312 " ref={boxRef}/>

        </>
    )


}