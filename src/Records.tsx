import { useState, useEffect } from 'react';
import axios from 'axios';
import { RecordType } from './RecordType';
const gitHubUrl = "https://fakestoreapi.com/products/2";

function Records({price,description,category}:RecordType) {
    const [posts, setPosts] = useState({
        id: 0,
        description: "",
        price: 0,
        title: "",
        rating: {
            rate: 0,
            count: 0,
        },
        category: "",
        image: ""
    });

    useEffect(() => {
        async function fetchData() {
            try {
                fetch('https://fakestoreapi.com/products/2').then((res)=>res.json()).then(data=>setPosts(data));
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return (<><section className="breadcrumbs">
        <div className="container">

            <ol>
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li>Blog Single</li>
            </ol>
            <h2>Blog Contact</h2>

        </div>
    </section>
        <div>{posts.id}
            <br />
            {posts.category}
            <br />
            {posts.description}
            <br />
            {posts.image}
            <br />
            Rating:
            {posts.rating.count}
            <br/>
            <br/>
            <br/>
            Category through props: {category}
            <br/>
            Price: {price}
            <br/>
            Description: {description}
        </div></>);
}

export default Records;