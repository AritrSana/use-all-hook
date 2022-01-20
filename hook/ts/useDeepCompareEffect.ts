import { useEffect, useRef } from "react"
import isEqual from "lodash/fp/isEqual"

export function useDeepCompareEffect(callback: () => void | any, dependencies: string[]) {
    const currentDependenciesRef = useRef<unknown>()

    if (!isEqual(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies
    }

    useEffect(callback, [currentDependenciesRef.current])
}