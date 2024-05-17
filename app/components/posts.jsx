import PostItem from "./postitem";

export default function Posts({posts}) {
    return (
        <div className="grid grid-cols-1 gap-16 py-24">
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    )
}