
export function collectStats(data) {
    var processed_obj = {}
    processed_obj['followers'] = data.user.followers.totalCount
    processed_obj['repos_contributed'] = data.user.repositoriesContributedTo.totalCount
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
    console.log(`Stats for user ${data.user.login}`, processed_obj)
    return processed_obj
}




