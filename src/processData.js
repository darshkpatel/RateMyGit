
export function collectStats(data) {
    var processed_obj = {}
    processed_obj['followers'] = data.user.followers.totalCount
    processed_obj['name'] = data.user.name
    processed_obj['login'] = data.user.login
    processed_obj['contributions'] = data.user.contributionsCollection.contributionCalendar.totalContributions
    processed_obj['total_repos'] = data.user.repositories.totalCount
    processed_obj = {...processed_obj, ...data.user.repositories.edges.reduce((acc, obj) => {
        return {
            "forks": acc.forks + obj.node.forkCount,
            "stars": acc.stars + obj.node.stargazers.totalCount,
            "prs": acc.prs + obj.node.pullRequests.totalCount,
            "watchers": acc.watchers + obj.node.watchers.totalCount
        }
    }, { "forks": 0, "stars": 0, "prs": 0, "watchers": 0 })
            }

    processed_obj['score'] =     Object.values(processed_obj).reduce((sum,val)=>sum+(isNaN(val)?0:val))
    console.log(`Stats for user ${data.user.login}`, processed_obj)
    return processed_obj
}




