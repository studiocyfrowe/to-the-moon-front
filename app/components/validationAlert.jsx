export default function ValidationAlert({status, msg, color}) {
    return (
        <div className={`flex flex-col p-4 border border-solid ${color} rounded-lg`}>
            <h6 className="mb-2">{status}</h6>
            <small>{msg}</small>
        </div>
    )
}