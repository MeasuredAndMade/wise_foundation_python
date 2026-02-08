import React, { useState, useEffect} from 'react';

const BlogPreview = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BLOG_ID = '6570565704852962858';
    const API_KEY = 'AIzaSyDF2uWj4GRTxhdWxYvLJaIat9bfDkV7VjI';

    async function fetchAllPosts() {
        let allPosts = [];
        let nextPageToken = ''

        while(true) {
           const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=50` + (nextPageToken ? `&pageToken=${nextPageToken}` : "");

            const res = await fetch(url);
            const data = await res.json();

            allPosts = [...allPosts, ...(data.items || [])];

            if(!data.nextPageToken) break;
            nextPageToken = data.nextPageToken;
        }

        setPosts(allPosts);
        setLoading(false);
    }

    useEffect(() => {
        fetchAllPosts();
    }, [])

    const getThumnail = (post) =>{
        const match = post.content.match(/<img[^>]+src="([^">]+)"/i); return match ? match[1] : null;
    }

    const removeFirstImageBlock = (html) =>{
        return html.replace(/<div className="separator"[\s\S]*?<\.div>/i, '')
    }

    const stripHtml = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    const getExcerpt = (text, length) => {
        if(text.length <= length) return text;
        return text.substring(0, length).trim() + "...";
    }

    const getPostExcerpt = (post, length) => {
        const withoutImage = removeFirstImageBlock(post.content);
        const textOnly = stripHtml(withoutImage);
        return getExcerpt(textOnly, length)
    }

    const displayedPosts = posts.length > 4 ? posts.slice(0, 4) : posts;
    return (
        <>
            <div className='columns'>
                <h2 className='title is-size-3 ml-5 service-title'>Latest Blogs</h2>
                <br />
            </div>
            <div className='columns is-vcentered is-multiline'>
                {displayedPosts.map(post => (
                    <>
                       
                            <div className='column is-4 is-vcentered'>
                                <figure className='is-vcentered image is-128x128'>
                                    <img src={getThumnail(post)} alt={post.title} />
                                </figure>
                            </div>
                            <div className='column is-8'>
                                <h3 className='subtitle service-title is-underlined is-size-5'>
                                    {post.title}
                                </h3>
                                <p className='is-size-6 blog-excerpt'>{getPostExcerpt(post, 150)}</p>
                            </div>
                            <hr className='has-background-grey-lighter' />
                        
                    </>
                ))}
            </div>
            <div className='columns'>
                <a className='about-link' href='https://measured-and-made.blogspot.com'>View All Posts →</a>
            </div>
        </>
    );
};

export default BlogPreview;