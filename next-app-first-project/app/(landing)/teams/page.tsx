import { getTeams } from './services';

export default async function Page() {
    const data = await getTeams()
    console.log(data)
    return(
        <section>
            <h1 className="">
                {JSON.stringify(data)}
            </h1>
        </section>
    )
}

