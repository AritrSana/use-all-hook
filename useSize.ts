
import { useState } from "react"
import { useEffect } from "react/cjs/react.development";

export function useSize(ref: React.MutableRefObject<any>) {
    const [size, setSize] = useState({})

    useEffect(() => {
        if (ref.current == null) return
        const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect))
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return size
}