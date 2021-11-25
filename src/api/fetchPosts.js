const postIds = [1,2,3,4,5,6,7,8]

export default function fetchPost (id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}