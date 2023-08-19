import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ImagePickerItem } from "./ImagePicker";
import * as Types from "../types";
const { SwitchItem, ButtonItem } = components;
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <div>
      <SwitchItem
        {...{
          note: "Lets you use voice activity in channels that enforce the use of push-to-talk.",
          ...util.useSetting(SettingValues, "PTT", defaultSettings.PTT),
        }}>
        No push-to-talk
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Hides the badge that appears on the taskbar icon.",
          ...util.useSetting(SettingValues, "setBadge", defaultSettings.setBadge),
        }}>
        Hide Icon Badge
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Stops your stream preview from being rendered. If an image is provided, the image given will be rendered.",
          ...util.useSetting(SettingValues, "streamPreview", defaultSettings.streamPreview),
        }}>
        Custom stream preview
      </SwitchItem>
      <ImagePickerItem
        {...{
          title: "Custom Preview Image",
          note: "Image to render as stream preview. (Must be under 200kb. If no image is provided, no stream preview will be shown.)",
          disabled: !SettingValues.get("streamPreview", defaultSettings.streamPreview),
          ...util.useSetting(SettingValues, "fakePreview", defaultSettings.fakePreview),
        }}
      />
      <SwitchItem
        {...{
          note: "Allows using the Spotify listen along feature on Discord without premium.",
          ...util.useSetting(SettingValues, "spotifyPremium", defaultSettings.spotifyPremium),
        }}>
        Spotify listen along
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Prevents Discord from pausing your Spotify when streaming or gaming.",
          ...util.useSetting(SettingValues, "spotifyPause", defaultSettings.spotifyPause),
        }}>
        Spotify Pause
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Removes the maximum account limit in Discord's built-in account switcher.",
          ...util.useSetting(SettingValues, "maxAccounts", defaultSettings.maxAccounts),
        }}>
        Max. account limit bypass
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Remove need of nitro from client themes which is beta feature.",
          ...util.useSetting(SettingValues, "clientThemes", defaultSettings.clientThemes),
        }}>
        Client Themes bypass
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Show Plain Folder Icon instead of the small guilds icons on guild folders.",
          ...util.useSetting(SettingValues, "plainFolderIcon", defaultSettings.plainFolderIcon),
        }}>
        Plain Folder Icon
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Adds star to still images too for favouriting them, treats them like GIFs.",
          ...util.useSetting(SettingValues, "favIMG", defaultSettings.favIMG),
        }}>
        Favourite Images
      </SwitchItem>
      <ButtonItem
        {...{
          button: "Reload discord",
          onClick: () => {
            window.location.reload();
          },
        }}>
        Some Settings Might require an reload to take effect.
      </ButtonItem>
    </div>
  );
};
