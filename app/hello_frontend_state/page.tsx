'use client'

import { use, useEffect, useState } from 'react'

export default function Page() {
    const [data, setData] = useState({ name: '初期値'})

    useEffect(() => {
        const change = {name: "変更"}
        setData(change)
    }, [])

    return <h1>hello {data.name}!</h1>
}