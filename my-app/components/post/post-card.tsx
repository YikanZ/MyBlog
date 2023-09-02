import { Post } from "@/types/collection";
import  Link  from "next/link"
import Image from "next/image"
import PostContent from "./post-content";

interface PostProps {
    post: Post;
    layout?: "horizontal" | "vertical";
    reverse?: boolean;
}



const PostCard = ( { post, layout = "horizontal", reverse = false }: PostProps ) => {
    return (
        <Link className={`@container 
        ${layout === "horizontal" ? 
        "grid md:grid-cols-2 grid-cols-1  gap-10 items-center" 
        : "space-y-10"}`}

              href={`/post/${post.slug}`}>
           {/* image */}
           <Image className={`rounded-md w-full object-cover object-center  h-full max-h-[300px] 
                ${reverse ? 
                    "md:order-last" 
                    : ""}` }
                  alt={post.title} 
                  src={post.image} 
                  width={600} 
                  height={300}/>
           {/* content */}
           <PostContent post={post}></PostContent>
        


        </Link>
    )
    
    




}


export default PostCard;