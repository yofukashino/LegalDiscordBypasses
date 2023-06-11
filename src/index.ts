import { Injector, Logger, common, settings } from "replugged";
export const { users: UltimateUserStore } = common;
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("LegalDiscordBypasses");
export const SettingValues = await settings.init(
  "dev.tharki.LegalDiscordBypasses",
  defaultSettings,
);
export const PluginInjector = new Injector();

import { registerSettings } from "./Components/Settings";
import { applyInjections } from "./patches/index";
export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
