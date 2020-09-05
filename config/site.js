module.exports = {
    title: `Portfolio`,
    description: `Summary of my career and work.`,
    author: `@yumi`,
    siteUrl: `https://yumi9502.github.io/portfolio/`,
    githubApiToken: process.env.GITHUB_API_TOKEN,
    githubApiQuery: `query ($number_of_repos: Int!) {
      viewer {
        name
        avatarUrl
        isHireable
        resourcePath
        repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
            totalCount
          nodes {
            name
            description
            homepageUrl
            forkCount
            createdAt
            updatedAt
            resourcePath
            languages(last: 9, orderBy: { field: SIZE, direction:ASC } ) {
                totalSize
                totalCount
              edges {
                  size
                node {
                  name
                  color
                }
              }
            }

            stargazers {
              totalCount
            }
          }
        }
      }
    }`,
    githubApiVariables: {
      number_of_repos: 12,
    },
  }