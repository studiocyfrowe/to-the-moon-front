import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function TableLayout({data}) {
    return (
        <table class="table-responsive w-full">
            <thead>
                <tr>
                    <th>rodzaj</th>
                    <th>liczba</th>
                    <th>czytaj więcej</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>[4]</td>
                        <td><FontAwesomeIcon icon={faArrowRight} className="my-auto ms-auto"/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}