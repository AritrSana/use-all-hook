import { useState } from "react"

export function useToggle(defaultValue: unknown) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value: unknown) {
        setValue((currentValue: unknown) =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}