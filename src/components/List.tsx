import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}

export default function List({ subs }: Props) {
    return (
        <ul>
            {
                subs.map((sub, i) => {
                    return (
                        <li key={i + 1}>
                            <img src={sub.avatar} alt={sub.nick} />
                            <h4>{sub.nick} (<small>{sub.subMonths})</small></h4>
                            <p>{sub.description?.substring(0, 20)}...</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}