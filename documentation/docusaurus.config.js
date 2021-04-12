/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mikrodev Documentation',
  tagline: 'Documentation site',
  url: 'https://mikrodev.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mikrodev', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: { 
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/mikrodevlogo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'ViewPLUS SCADA',
          position: 'left',
        },
		{
          to: 'docs/',
          activeBasePath: 'docs2',
          label: 'Mikrodiagram(PLC)',
          position: 'left',
        },
		{
          to: 'docs/',
          activeBasePath: 'docs2',
          label: 'Telediagram(RTU)',
          position: 'left',
        },
		{
          to: 'docs/',
          activeBasePath: 'docs2',
          label: 'Assistant(Gateway)',
          position: 'left',
        },
        
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mikrodev/Documentation/edit/master/documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mikrodev/Documentation/edit/master/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
