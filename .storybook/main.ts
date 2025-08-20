import type { StorybookConfig } from "@storybook/nextjs";

console.log(`storybook loaded!
    
    
    
    
    `);

const config: StorybookConfig = {
  stories: ["../app/**/*.stories.tsx"],
  framework: "@storybook/nextjs-vite",
};

export default config;
