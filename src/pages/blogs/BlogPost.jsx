import { Title } from "react-head";

const BlogPost = () => {
    return <>
        <Title>BlogPost</Title>
        <main className="w-full">
            <img src="/banners/Our-blogs.png" alt="banner image" className="w-full h-auto" />
            <div
                className="w-full h-auto flex px-4 md:px-8 flex-col py-4 justify-center items-center gap-y-4"
                style={{
                    background: "linear-gradient(rgba(255, 255, 255, 0.562), rgba(255, 255, 255, 0.479)), url('/blogpost-bg.png')"
                }}
            >
                <h2 className="text-[28px] font-medium">Guiding the Way, One Beam at a Time: Flashlight Brilliance</h2>
                <p>In the depths of darkness, when visibility fades and uncertainty looms, a humble yet powerful companion stands ready to illuminate the way – the flashlight. This indispensable tool, often overlooked in its simplicity, transforms fear into confidence and the unknown into the familiar.</p>
            </div>
        </main>
    </>
}

export default BlogPost;