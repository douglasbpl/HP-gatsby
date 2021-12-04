module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "hp-gatsby",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {      
      typeName: "alldata",      
      fieldName: "alldata",      
      url: "https://api-us-east-1.graphcms.com/v2/cku8rn1zy41w601ze86trfjzq/master",
    },
  },  
]
}
