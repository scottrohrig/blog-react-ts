import { PostDeleteData, PostFormData, PostsState, PostState } from "./postSlice";

const API_URL = 'http://localhost:3000';
const headers: Record<string, string> = {
  "Content-Type": 'application/json',
}


export const fetchPosts = async () => {
  return fetch(`${API_URL}/posts.json`, {
    method: 'GET',
    headers,
  })
    .then((response) => response.json())
    .catch(err => {
      console.log("Error", err)
      return {} as PostsState;
    })
}

export const createPost = async (payload: PostFormData) => {
  const post = payload.post
  return fetch(`${API_URL}/posts.json`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ post })
  })
    .then((response) => response.json())
    .catch(err => {
      console.log("Error", err)
      return {} as PostsState;
    })
}

export const destroyPost = async (payload: PostDeleteData) => {
  const post = payload.post
  return fetch(`${API_URL}/posts/${post.post_id}.json`, {
    method: "DELETE",
    headers,
    body: JSON.stringify({ post })
  })
    .then((response) => response.json())
    .catch(err => {
      console.log("Error", err)
      return {} as PostsState;
    })
}