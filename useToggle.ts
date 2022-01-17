import { useState } from "react"

export default function useToggle(defaultValue: unknown) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value) {
        setValue((currentValue: unknown) =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}