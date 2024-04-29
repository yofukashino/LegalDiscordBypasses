import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default (): void => {
  const { TimeoutManager } = Modules;
  PluginInjector.instead(
    TimeoutManager.Timeout.prototype,
    "start",
    (
      args: [string | number, Types.DefaultTypes.AnyFunction],
      res,
      instance: { start: () => void; stop: () => void },
    ) => {
      if (
        args[1]?.toString().includes("SPOTIFY_AUTO_PAUSED") &&
        SettingValues.get("spotifyPause", defaultSettings.spotifyPause)
      ) {
        instance.start = () => {};
        instance.stop();
        return null;
      }
      return res.call(instance, ...args);
    },
  );
  PluginInjector.instead(
    TimeoutManager.Interval.prototype,
    "start",
    (
      args: [string | number, Types.DefaultTypes.AnyFunction],
      res,
      instance: { start: () => void; stop: () => void },
    ) => {
      if (
        args[1]?.toString().includes("SPOTIFY_AUTO_PAUSED") &&
        SettingValues.get("spotifyPause", defaultSettings.spotifyPause)
      ) {
        instance.start = () => {};
        instance.stop();
        return null;
      }
      return res.call(instance, ...args);
    },
  );
};
