import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  // Add support for multiple story formats, across frameworks
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|vue|html|mdx|ts)",
  ],

  // Addons for additional functionality, these work across all frameworks
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  // Framework-specific presets
  framework: {
    name: "@storybook/nextjs", // Default to React/Next.js as your primary framework
    options: {},
  },

  // Webpack settings to handle multiple frameworks
  webpackFinal: async (config) => {
    return {
      ...config,

      // Optional: Additional customization for handling different frameworks
      resolve: {
        ...config.resolve,
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", ".html"], // Add support for Vue, HTML, etc.
      },
    };
  },

  // Serve static assets (like images)
  staticDirs: ["../public"],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;