'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Page() {
    const [data, setData] = useState({ message: '' })

    useEffect(() => {
        axios.get('http://localhost:8000/api/hello/backend/')
            .then((res) => {
                console.log('✅ レスポンス内容:', res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.error('❌ エラー:', err)
            })
    }, [])

    return <div>hello {data.message}!</div>
}
