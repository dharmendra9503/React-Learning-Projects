import React, { useState, useEffect } from 'react';
import { Container, LoadingSpinner, PostCard } from '../components';
import appwriteService from "../appwrite/config";
import { useDispatch, useSelector } from 'react-redux';
import { userPosts } from '../features';

function AllPosts() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.blog.userPosts);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (posts.length !== 0) {
            setLoading(false);
        }
        appwriteService.getUserPosts(userData.$id).then((posts) => {
            if (posts) {
                dispatch(userPosts(posts.documents));
            }
        }).finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <LoadingSpinner />
    }
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;