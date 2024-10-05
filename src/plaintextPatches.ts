import Types from "./types";
export default [
  {
    find: "multiaccount_cta_tooltip_seen",
    replacements: [
      {
        match: /(let \w+=)\d+(,\w+="switch-accounts-modal",\w+="multiaccount_cta_tooltip_seen")/,
        replace: (_, prefix: string, suffix: string) => `${prefix}Infinity${suffix}`,
      },
    ],
  },
  {
    find: "get isPreview",
    replacements: [
      {
        match: /(get gradientPreset\(\){return (\w+))}/,
        replace: (_, prefix: string, preset: string) =>
          `${prefix}=replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?._getGradientPreset(${preset})} setGradientPreset(e){${preset}=e}`,
      },
      {
        match: /(get isPreview\(\){return (\w+))}/,
        replace: (_, prefix: string, orignal: string) =>
          `${prefix}=replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?._getisPreview(${orignal})}`,
      },
    ],
  },
  {
    find: "get systemPrefersColorScheme",
    replacements: [
      {
        match: /(get theme\(\){return) (\w+\(\))}/,
        replace: (_, prefix: string, preset: string) =>
          `${prefix} replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?._getTheme(${preset})}`,
      },
    ],
  },
  {
    find: "ApplicationStreamPreviewUploadManager",
    replacements: [
      {
        match: /(let (.)=)(.\.toDataURL\("image\/jpeg"\));/,
        replace: (_: string, prefix: string, preview: string, original: string) =>
          `${prefix}replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?._getStreamPreview(${original}); if (!${preview}) return;`,
      },
    ],
  },
  {
    find: "AppIconPersistedStoreState",
    replacements: [
      {
        match: /\w+\.\w+\.canUsePremiumAppIcons\(\w+\.default\.getCurrentUser\(\)\)/,
        replace: `(replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?._getAppIconsEnabled()||$&)`,
      },
      {
        match: /get isUpsellPreview\(\){return (\w+)/,
        replace: (_, value: string) =>
          `get isUpsellPreview(){return !(replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?._getAppIconsEnabled() || !${value})`,
      },
    ],
  },
  {
    find: ".getCurrentDesktopIcon(),",
    replacements: [
      {
        match: /\w+\.\w+\.isPremium\(\w+\.default\.getCurrentUser\(\)\)/,
        replace: (premium) =>
          `replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?._getAppIconsEnabled()||${premium}`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
