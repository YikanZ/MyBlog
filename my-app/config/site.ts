export interface SiteConfig {
    siteName: string;
    decription: string;
    currentlyAt: string;
    socialLinks: {
        LinkedIn: string;
        FaceBook: string;
        Instagram: string;
        Twitter: string;
        GitHub: string;
        Youtube: string;

    };
}




const siteConfig:SiteConfig = {
    siteName:"Exploer",
    decription:"A minimal and loverly travel blog which shares experiences and citiest around the world",
    currentlyAt:"Budapest",
    socialLinks:{
        LinkedIn:"https://www.linkedin.com/in/yikan-zhang-15573182/",
        FaceBook:"https://www.facebook.com/yikan.zhang.9",
        Instagram:"https://www.instagram.com/yikanz/",
        Twitter:"https://twitter.com/yikan2",
        GitHub:"https://github.com/YikanZ",
        Youtube:"https://www.youtube.com/channel/UCwHlWB3MlVmlqSdX9Jq2oDw"

        
    },
};

export default siteConfig;

