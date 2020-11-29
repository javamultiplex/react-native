import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    //action === {type:'add_blogpost'}
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }]
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {

    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' })
    }

    return <BlogContext.Provider value={{
        data: blogPosts,
        addBlogPost: addBlogPost
    }}>{children}</BlogContext.Provider>
}

export default BlogContext;