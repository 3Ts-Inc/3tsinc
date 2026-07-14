import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: "three-ts",
  },
  deployment: {
    appId: "xixpzdusfkk5yyqf5uxr5eth",
    autoUpdates: true,
  },
});
