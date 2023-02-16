
import { Teams } from "../models";

interface Props {
  //Tipeamos las props del componente
  teams: Teams;
}

export const TeamList = ({ teams }: Props) => {
    
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4">
        {teams?.squad.map( player => {
            return(
                <div 
                    className="max-w-sm p-6   justify-center items-center rounded overflow-hidden shadow-lg gap-2"
                    key={player.id}
                >
                    <p className="text-gray-700 font-bold text-base">{player.name}</p>
                    <p className="text-gray-700 text-base">{player.role}</p>
                    <p className="text-gray-700 text-base">{player.position}</p>
                    <p className="text-gray-700 text-base">{player.nationality}</p>
                    <p className="text-gray-700 text-base">{player.shirtNumber}</p>
                    
                </div>
            )
        })}
    </div>
  );
};


