import Image from 'next/image';

const CTACard = () => {
    return (
        <div className="rounded-md overflow-hidden bg-slate-100 py-10 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30 z-10"/>
            <Image 
                fill
                alt="CTA Card Image"
                className="object-center object-cover"
                src="https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3"
            />
            {/* content container */}
            <div className="relative z-20">
                <div className="text-lg font-medium">#ExploreTheWorld</div>
                <h3 className="text-4xl mt-3 font-semibold">Explore the world with me!</h3>
                <p className="mt-2 max-w-lg text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                </p>
                    {/* form */}
                    <form className="mt-6 flex items-center gap-2 w-full">
                        <input 
                        placeholder="Write your email"
                        className="w-full md:w-auto bg-white/80 text-base rounded-md py-2 px-3 outline-none focus:ring-2 ring-neutral-600 placeholder:text-sm" />
                        <button className="whitespace-nowrap px-3 py-2 rounded-md bg-neutral-800 text-neutral-200">Sign up</button>
                    </form>
            </div>
 
        </div>
    );
};


export default CTACard;