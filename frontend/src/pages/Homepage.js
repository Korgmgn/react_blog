import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
    const { loading, error, resData } = useFetch('http://localhost:1337/api/posts')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div>
            {resData.map(post => (
                <div key={post.id} className="review-card">
                    <div className="rating">{post.attributes.updatedAt}</div>
                    <h2>{post.attributes.title}</h2>
                    <p>{post.attributes.body.substring(0, 200)}</p>
                    <Link to={`/posts/${post.id}`}>Read more...</Link>
                </div>
            ))}
        </div>
    )
}
