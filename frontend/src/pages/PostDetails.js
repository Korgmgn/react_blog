import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function PostDetails() {
    const { id } = useParams()
    const { loading, error, resData } = useFetch('http://localhost:1337/api/posts/' + id)
    console.log(id)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    return (
        <div className="review-card">
            <div className="rating">{resData.attributes.createdAt}</div>
            <h2>{resData.attributes.title}</h2>
            <p>{resData.attributes.body}</p>
        </div>
    )
}
