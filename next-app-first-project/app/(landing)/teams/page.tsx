import { TeamList } from './components';
import { getTeams } from './services';

export default async function Teams() {
    const data = await getTeams()
    return(
        <section>
            <TeamList teams={data}/>
        </section>
    )
}

