const getData = async ()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    const simplifiedUser = users.map((user)=>({
        id:user.id,
        companyName:user.company.name
    }))
    return simplifiedUser
    } catch (error) {
        console.log(error);
        return []
    }
}
getData().then(data => {
  console.log(data);
});

// async function getSimplifiedPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const posts = await response.json();

//     // Keep only the id and title
//     const simplifiedPosts = posts.map(post => ({
//       id: post.id,
//       title: post.title
//     }));

//     return simplifiedPosts;
//   } catch (error) {
//     console.error("Error:", error.message);
//     return [];
//   }
// }

// // Example usage
// getSimplifiedPosts().then(data => {
//   console.log(data);
// });
