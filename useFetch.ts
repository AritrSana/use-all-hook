import React from 'react'

export const useFetch = (url: RequestInfo, init?: RequestInit) => {
    return fetch(url, init)
}

