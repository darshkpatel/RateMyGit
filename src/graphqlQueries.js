
import { gql } from "apollo-boost";

export const datesQuery = (username) => gql`{
  user(login: ${username}) {
    createdAt,
    contributionsCollection{
      startedAt,
      endedAt,
      contributionYears,
    }
  }
}
`

export const contributionsQuery = (username,from,to) => gql`
{
  user(login: ${username}) {
    contributionsCollection(from: ${from}, to: ${to}) {
      totalCommitContributions,
      totalIssueContributions,
      totalPullRequestContributions,
      totalPullRequestReviewContributions,
      totalRepositoriesWithContributedPullRequests,
      totalRepositoriesWithContributedCommits,
      hasAnyContributions,
      hasActivityInThePast,
    }
  }
}

`

export const statsQuery = gql`
query User($username: String!) {
user(login: $username) {
name,
url,
login,
createdAt,
followers{totalCount},

contributionsCollection{
  hasAnyContributions,
  contributionCalendar{totalContributions}
 }

 repositories(first:100 ){
  totalCount,
    edges{
  node{
    forkCount,
    nameWithOwner,
    watchers{totalCount},
    pullRequests{totalCount},
    stargazers{totalCount},
        }
      }
    }
  }
}
rateLimit {
limit
cost
remaining
resetAt
}
}
`
