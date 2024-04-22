import GlobalButton from "./globalButton";

export default function ButtonsBox() {
    return (
        <div className="pt-4">
            <GlobalButton label={`Dramat psychologiczny`}/>
            <GlobalButton label={`Komedia`}/>
            <GlobalButton label={`Filmy akcji`}/>
        </div>
    )
}