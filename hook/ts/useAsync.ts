import { useCallback, useEffect, useState } from "react"


export function useAsync(callback: () => any, dependencies = []) {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown>()
    const [value, setValue] = useState<unknown>()

    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, error, value }
}

