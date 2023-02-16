export const getTeams = async() => {
    const res = await fetch("http://api.football-data.org/v2/teams/2061", {
        headers:{
            "X-Auth-token" :"4ab52e42bdb34cc9813dd7d937e4b883"
        }
    })
    return res.json()
};
