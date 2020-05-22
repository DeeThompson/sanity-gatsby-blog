export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec843f61a3722017caf7d74',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-spcdsyvo',
                  apiId: '76ed609d-ff58-4cd5-8866-436ea4ea4d22'
                },
                {
                  buildHookId: '5ec843f69cfb28020f0e064f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kgyk3ud8',
                  apiId: '6ef1c740-1c59-40c6-bf46-00c6b4c49294'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DeeThompson/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kgyk3ud8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
