import patchAccountSwitcherStrings from "./AccountSwitcherStrings";
import patchClientThemeUpdate from "./ClientThemeUpdate";
import patchFolder from "./Folder";
import patchIdle from "./IdleStore";
import patchImage from "./Image";
import patchPTT from "./Permission";
import patchBadges from "./SetBadge";
import patchSpotifyPremium from "./SpotifyPremium";
import patchStreamPreview from "./StreamPreview";
import patchTimeouts from "./Timeout";

export const applyInjections = (): void => {
  patchAccountSwitcherStrings();
  patchClientThemeUpdate();
  patchFolder();
  patchIdle();
  patchImage();
  patchPTT();
  patchBadges();
  patchSpotifyPremium();
  patchStreamPreview();
  patchTimeouts();
};
