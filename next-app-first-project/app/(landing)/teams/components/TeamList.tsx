import { Teams } from "../models";

interface Props {
  //Tipeamos las props del componente
  teams: Teams;
}

export const TeamList = ({ teams }: Props) => {
    
  return (
    <div>
        {teams?.squad.map( player => {
            return(
                <div>
                    {player.name}
                </div>
            )
        })}
    </div>
  );
};


