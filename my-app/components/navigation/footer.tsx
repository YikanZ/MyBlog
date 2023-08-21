import Link from "next/link";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import SocialLink from "../elements/social-link";

const Footer = () => {
    return (
    <div className="py-8 mt-10 border-t">
        <PaddingContainer>
            <div>
                <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                <p className="max-w-md mt-2 text-lg text-neutral-700">
                    {siteConfig.decription}
                </p>
            </div>
            {/* Social link section */}
            <div className="flex mt-6 flex-wrap justify-between gap-4">
                <div>
                    <div className="font-medium text-lg">#exploerTheworld</div>
                    <div className="flex items-center justify center gap-3 text-neutral-600 mt-2">
                        <SocialLink
                            platform="twitter" 
                            link={siteConfig.socialLinks.Twitter}/>      
                        <SocialLink 
                            platform="instagram"
                            link={siteConfig.socialLinks.Instagram}/>
                        <SocialLink 
                            platform="github" 
                            link={siteConfig.socialLinks.GitHub}/>              
                        <SocialLink
                            platform="youtube"
                            link={siteConfig.socialLinks.Youtube}/>
                        <SocialLink 
                            platform="linkedin" 
                            link={siteConfig.socialLinks.LinkedIn}/>
                    </div>
                    
                </div>
            <div>
                <div className="text-sm text-neutral-400">Currently At</div>
                <div className="bg-white shadow-md rounded-md py-2 px-3  items-center gap-2 flex">
                    <div className="bg-emerald-400 rounded-full w-2 h-2"></div>
                    <div>{siteConfig.currentlyAt}</div>
                </div>
            </div>
            </div>
            {/* Bottom section */}
            <div className="py-3 border-t flex flex-wrap items-center justify-between gap-4 mt-16">
                <div className="text-sm text-neutral-400">
                    rights are reserved | Copyright {new Date().getFullYear()}
                </div>
                <div className="text-sm">
                     Made with love by {" "}
                     <Link className="underline underline-offset-4" 
                     href="https://www.linkedin.com/in/yikan-zhang-15573182/">@Yikan
                     </Link>
                </div>

            </div>

        </PaddingContainer>
    </div>
    )};

    export default Footer;