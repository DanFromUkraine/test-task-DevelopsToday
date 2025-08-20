import { createRequire } from "module";
const require = createRequire(import.meta.url);

console.log(`storybook loaded!
    
    
    
    
    `);

export default {
  // your stories/addons...
  stories: ["../app/*.stories.@(j|t)sx?"],
  framework: "@storybook/nextjs-vite", // 👈 Add this
//   core: { builder: "@storybook/builder-vite" },

// plugins
//   addons: ["@storybook/addon-docs"],
};
