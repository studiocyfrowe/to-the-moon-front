export default function MainNavigation({children}) {
    return (
        <div className="grid grid-cols-1 gap-3 border border-solid border-orange-600 bg-orange-600/30 rounded-lg mt-4 p-3">{children}</div>
    )
}