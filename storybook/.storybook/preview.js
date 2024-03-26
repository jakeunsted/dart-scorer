import { setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import '@mdi/font/css/materialdesignicons.css';

setup((app) => {
  registerPlugins(app);
});

// /** @type { import('@storybook/vue3').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };
