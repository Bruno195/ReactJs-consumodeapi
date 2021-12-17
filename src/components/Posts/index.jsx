import PostCard from "../PostCard"

export default function Posts({ posts }) {
  return (
    <div className="posts">

      {
        posts.map((posts, index) => {

          return (

            <PostCard index={index}
              title={posts.title}
              key={posts.id}
              body={posts.body}
              cover={posts.cover}
              body={posts.body}
              id={index}
            ></PostCard>

          )

        })
      }
    </div>
  )
}

//sintatic event 