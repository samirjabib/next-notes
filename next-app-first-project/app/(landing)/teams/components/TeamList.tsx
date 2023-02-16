
import { Teams } from "../models";

interface Props {
  //Tipeamos las props del componente
  teams: Teams;
}

export const TeamList = ({ teams }: Props) => {
    
  return (
    <div className="flex flex-row flex-wrap gap-4">
        {teams?.squad.map( player => {
            return(
                <div className="max-w-sm p-4 flex flex-col justify-center rounded overflow-hidden shadow-lg">
                    <p className="text-gray-700 text-base">{player.name}</p>
                    <p>{player.role}</p>
                    <p>{player.position}</p>
                    <p>{player.nationality}</p>
                    <p>{player.shirtNumber}</p>
                </div>
            )
        })}
    </div>
  );
};


