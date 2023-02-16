
import React, { use } from "react";
import { TeamList } from "./components";
import { getTeams } from "./services";

function Teams() {
  const data = use(getTeams()); //when i use effect i don't need the async
  return (
    <section className="w-full h-auto">
      <TeamList teams={data} />
    </section>
  );
}

export default Teams
