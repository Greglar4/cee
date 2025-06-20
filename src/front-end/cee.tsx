import { useRef, useEffect } from "react"
import { createPlot } from "./dummy-line-plot"

export function Cee() {
    const elementRef = useRef<HTMLDivElement| null>(null)
    useEffect(() => {
        if (elementRef.current) {
            createPlot(elementRef.current)
        }   
    }, [])
    return (
    <>
        <div ref={elementRef}/>
    </>  
    )
}