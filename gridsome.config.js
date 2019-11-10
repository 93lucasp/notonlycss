// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//gridsome.config.js
module.exports = {
  siteName: 'Not Only CSS',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'events/**/*.md',
        typeName: 'Events',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'snippets/**/*.md',
        typeName: 'Snippets',
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}