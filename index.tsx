import { registerSlashCommand, unregisterSlashCommand } from "@api/Commands";
import { showToast } from "@api/Toasts";
import { findByProps } from "@webpack";

// Get Discord's message-sending function
const MessageActions = findByProps("sendMessage", "receiveMessage");

const HelloCommand = {
  name: "Rawr",
  description: "test",
  options: [],

  execute(_, ctx) {
    // Send a message to the channel where the command was used
    MessageActions.sendMessage(ctx.channel.id, {
      content: `Rawr :3`,
    });
  },
};

export default {
  name: "Rawr",
  description: "Adds a custom slash command that says hello",
  authors: [{ id: "1169111190824308768", name: "Akuma" }],

  onLoad() {
    registerSlashCommand(HelloCommand);
    showToast("✅", { type: "success" });
  },

  onUnload() {
    unregisterSlashCommand(HelloCommand);
    showToast("❌", { type: "info" });
  },
};
