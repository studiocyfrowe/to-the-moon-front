import GlobalButton from "./globalButton";
import HeaderSection from "./headerSection";
import SingleItem from "./singleItem";
import MovieItem from "./singleItem";

export default function ItemsBox({items, label, cities}) {
    return (
        <div className="flex flex-col">
            <HeaderSection label={label}/>
            <div className="grid grid-cols-4 gap-8 overflow-x-scroll overflow-y-hidden no-scrollbar">
                {items ? items && items.map((item) => (
                    <SingleItem data={item}/>
                )) : null}
                {cities ? cities && cities.map((city) => (
                    <GlobalButton label={city.name} key={city.id}></GlobalButton>
                )) : null}
            </div>
        </div>
    )
}