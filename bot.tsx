import definePlugin from "@utils/types";
import { registerCommand, unregisterCommand } from "@api/Commands";

const EPHEMERAL = 1 << 6; // This flag makes the message visible only to the user

const ApplicationCommandInputType = {
  BUILT_IN: 1
} as const;

export default definePlugin({
  name: "RawrBot",
  description: "Adds a /rawr command that replies with rawr~",

  start() {
    registerCommand({
      name: "rawr",
      description: "Replies with a cute rawr~",
      inputType: ApplicationCommandInputType.BUILT_IN,
      options: [],
      execute: async () => {
        return {
          content: "rawr~",
          flags: EPHEMERAL
        };
      }
    });
  },

  stop() {
    unregisterCommand("rawr");
  }
});
