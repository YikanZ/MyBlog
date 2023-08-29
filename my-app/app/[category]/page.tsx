import { DUMMY_POSTS } from "@/public/DUMMY_DATA";

const Page = ({ params }: { params: { category: string }}) => {

    const posts = DUMMY_POSTS.filter((post) => post.category.title.toLocaleLowerCase() === params.category);
    return <div>{JSON.stringify(posts)}</div>
};

export default Page;

