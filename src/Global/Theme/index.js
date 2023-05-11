const theme = {
  colors: {
    primaryColor: `#539b00`,
    secondaryColor: `#38d927`,
    tertiaryColor: `#ffd700`,
    grayScale: {
      black: `#030303`,
      chineseBlack: `#111111`,
      raisinBlack: `#222222`,
      darkCharcoal: `#333333`,
      outerSpace: `#444444`,
      davysGrey: `#555555`,
      granite: `#666666`,
      sonicSilver: `#777777`,
      taupeGrey: `#888888`,
      spanishGrey: `#999999`,
      darkGrey: `#AAAAAA`,
      gray: `#BBBBBB`,
      chineseSilver: `#CCCCCC`,
      gainsboro: `#DDDDDD`,
      brightGrey: `#EEEEEE`,
      offWhite: `#F0F0F0`,
      white: `#FFFFFF`,
    },
    error: `#cf352e`,
  },
  screens: {
    smallMobile: {
      port: `(max-width: 320px) and (max-height: 800px)`,
      landscape: `(max-width: 800px) and (max-height: 320px)`,
    },
    mediumMobile: {
      port: `(max-width: 375px) and (max-height: 800px)`,
      landscape: `(max-width: 800px) and (max-height: 375px)`,
    },
    largeMobile: {
      port: `(max-width: 425px) and (max-height: 930px)`,
      landscape: `(max-width: 930px) and (max-height: 425px)`,
    },
    smallTablet: {
      port: `(max-width: 800px) and (max-height: 1050px)`,
      landscape: `(max-width: 1050px) and (max-height: 800px)`,
    },
    largeTablet: {
      port: `(max-width: 1050px) and (max-height: 1400px)`,
      landscape: `(max-width: 1400px) and (max-height: 1050px)`,
    },
    desktop: {
      port: `(min-width: 1051px) and (min-height: 1401px)`,
      landscape: `(min-width: 1401px) and (min-height: 1051px)`,
    },
    tv: `(min-width: 2500px)`,
  },
};

export default theme;
