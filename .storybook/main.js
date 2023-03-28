module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions",
    // "@storybook/addon-docs",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin'
  },
};