import { Post } from "@/types/collection";
import  Link  from "next/link"
import Image from "next/image"
import PostContent from "./post-content";

interface PostProps {
    post: Post;
    layout?: "horizontal" | "vertical";
}



const PostCard = ( { post, layout = "horizontal" }: PostProps ) => {
    return (
        <Link className={`${layout === "horizontal" ? 
        "grid grid-cols-2 gap-10 items-center" 
        : "space-y-10"}`}

              href={`/post/${post.slug}`}>
           {/* image */}
           <Image className="rounded-md w-full object-cover object-center max-h-[300px]" alt={post.title} src={post.image} width={600} height={300}/>
           {/* content */}
           <PostContent post={post}></PostContent>
        


        </Link>
    )
    
    




}


export default PostCard;