import Modules from "../lib/requiredModules";
import injectAccountSwitcherStrings from "./AccountSwitcherStrings";
import injectAudioResolver from "./AudioResolver";
import injectClientThemeUpdate from "./ClientThemeUpdate";
import injectFolder from "./Folder";
import injectIdle from "./IdleStore";
import injectImage from "./Image";
import injectPTT from "./Permission";
import injectBadges from "./SetBadge";
import injectSpamUtils from "./SpamUtils";
import injectSpotifyPremium from "./SpotifyPremium";
import injectTimeouts from "./Timeout";

export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectAccountSwitcherStrings();
  void injectAudioResolver();
  injectClientThemeUpdate();
  injectFolder();
  injectIdle();
  injectImage();
  injectPTT();
  injectBadges();
  injectSpamUtils();
  injectSpotifyPremium();
  injectTimeouts();
};

export default { applyInjections };
