import PaddingContainer from "@/components/layout/padding-container";
import { DUMMY_POSTS  } from "@/public/DUMMY_DATA"; 
import { notFound } from "next/navigation";
import PostHero from "@/components/post/post-hero";
import SocialLink from "@/components/elements/social-link";
import PostBody from "@/components/post/post-body";
import CTACard from "@/components/elements/cta-card";


export const generateStaticParams = async () => {
    return DUMMY_POSTS.map((post) => {
        return {
            slug: post.slug,
        };
        
    });
};

const Page = ({params
} : { 
    params :{
        slug:string;
    };
}) => {
    const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }
    return (
        <PaddingContainer>
            <div className = "space-y-10">
                {/* post hero */}
            <PostHero post = {post} />
              {/* post body */}
            <div className="flex gap-10 flex-col md:flex-row">
                <div className="relative">
                    <div className="sticky top-20 flex md:flex-col gap-5 items-center ">
                        <div className="font-medium md:hidden">Share this Content:</div>
                        <SocialLink platform="facebook" 
                        isShareURL={true}
                        link={`https://www.facebook.com/sharer/sharer.php?u=${
                             `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`} />

                        <SocialLink platform="twitter" 
                        isShareURL={true}
                        link={`https://www.twitter.com/intent/tweet?url=${
                             `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`} />

                        <SocialLink platform="linkedin" 
                        isShareURL={true}
                        link={`https://www.linkedin.com/sharing/share-offsite/?url=${
                             `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`} />
                    </div>
                </div>
                
                <PostBody body = {post.body} />
            </div>
            {/* CTA */}
              <CTACard />
              </div>
        </PaddingContainer>
    )};


export default Page;