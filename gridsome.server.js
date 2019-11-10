// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/notonlycss')

    const collection = actions.addCollection('RedditPost')

    for (const post of data.items) {
      collection.addNode({
        id: post.guid.replace('https://medium.com/p/',""),
        title: post.title,
        path: '/reddit/' + post.guid.replace('https://medium.com/p/',""),
        thumbnail: post.thumbnail,
        date: post.pubDate.split(" ")[0],
        author: post.author,
        content: post.content,
        link: post.link
      })
    }
  })
}