import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavItem({label}) {
    let hrefLowerCase = label.toLowerCase()
    return (
        <Link href={hrefLowerCase}>
            <div className="flex flex-row py-8 px-8">
                <h6 className="text-lg my-auto">{label}</h6>
                <FontAwesomeIcon icon={faArrowRight} className="my-auto ms-auto"/>
            </div>
        </Link>
    )
}