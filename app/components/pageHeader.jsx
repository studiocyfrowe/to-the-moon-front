export default function PageHeader({parent, child}) {
    return (
        <div>
            <small className="mb-1">{parent}</small>
            <h4 className="text-2xl border-b border-orange-600/30 pb-4">{child}</h4>
        </div>
    )
}