import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch(url)
                const data = await response.json()
                setItems(data)
            }
            fetchData()
        } catch (err) {
            console.log(err)
        }

    }, [url])

    return [items]
}

export default useFetch