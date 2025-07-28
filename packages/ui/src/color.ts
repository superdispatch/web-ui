// `Color`: Represents the primary color palette with various shades and opacities.
//    - Includes legacy colors marked as deprecated.
//   - To update a color, modify the hex or rgba value associated with the desired color name.

export const Color = {
  White: "#fff",
  White50: "rgba(255, 255, 255, 0.5)",
  White40: "rgba(255, 255, 255, 0.4)",
  White20: "rgba(255, 255, 255, 0.2)",
  White10: "rgba(255, 255, 255, 0.1)",
  White08: "rgba(255, 255, 255, 0.08)",
  Transparent: "rgba(0, 0, 0, 0)",

  Black: "#000",
  Black50: "rgba(0, 0, 0, 0.5)",
  Black20: "rgba(0, 0, 0, 0.2)",

  //Colors with 30% opacity
  Dark30: "rgba(143, 148, 158, 0.3)",
  Blue30: "rgba(0, 112, 245, 0.3)",
  Green30: "rgba(3, 135, 47, 0.3)",
  Red30: "rgba(229, 35, 13, 0.3)",
  Silver30: "rgba(225, 229, 234, 0.3)",

  //Colors with 10% opacity
  Blue10: "rgba(0, 112, 245, 0.1)",
  Red10: "rgba(195, 25, 9, 0.1)",

  //
  // Legacy Neutral Colors
  //

  /**@deprecated Use Dark100 */
  Grey100: "#8F949E",
  /**@deprecated Use Dark200 */
  Grey200: "#6A707C",
  /**@deprecated Use Dark300 */
  Grey300: "#5B6371",
  /**@deprecated Use Dark400 */
  Grey400: "#323C4E",
  /**@deprecated Use Dark450 */
  Grey450: "#222F44",
  /**@deprecated Use Dark500 */
  Grey500: "#192334",

  /** @deprecated */
  Dark200: "#6A707C",
  /** @deprecated */
  Dark400: "#323C4E",
  /** @deprecated */
  Dark450: "#222F44",

  /** @deprecated */
  Silver100: "#F6F7F8",
  /** @deprecated */
  Silver300: "#E8ECF0",

  //
  // Legacy Extended Palette
  //

  /** @deprecated */
  Blue75: "#CCE5FF",
  /** @deprecated */
  Blue100: "#A8D1FF",
  /** @deprecated */
  Blue200: "#66ADFF",
  /** @deprecated */
  Blue400: "#0063DB",

  /** @deprecated */
  Green75: "#C8F4D1",
  /** @deprecated */
  Green100: "#90EAAE",
  /** @deprecated */
  Green200: "#5DDA87",
  /** @deprecated */
  Green400: "#1E8F46",

  /** @deprecated */
  Purple75: "#DCDBF5",
  /** @deprecated */
  Purple100: "#CBC8EE",
  /** @deprecated */
  Purple200: "#A7A1E8",
  /** @deprecated */
  Purple400: "#473ABB",

  /** @deprecated */
  Red75: "#FDD9D3",

  /** @deprecated */
  Red100: "#FDC2BA",
  /** @deprecated */
  Red200: "#FE988B",
  /** @deprecated */
  Red400: "#D9210D",

  /** @deprecated */
  Teal75: "#BEEDF9",
  /** @deprecated */
  Teal100: "#91E3F8",
  /** @deprecated */
  Teal200: "#61D3EF",
  /** @deprecated */
  Teal400: "#008DB8",

  /** @deprecated */
  Yellow75: "#FFF1C2",
  /** @deprecated */
  Yellow100: "#FFE494",
  /** @deprecated */
  Yellow200: "#FFDC6B",
  /** @deprecated */
  Yellow400: "#FFA91F",

  //
  // Neutral Colors
  //

  Dark50: "rgba(25, 35, 52, 0.5)",
  Dark100: "#8F949E",
  Dark300: "#5B6371",
  Dark500: "#192334",

  Silver200: "#F3F5F8",
  Silver400: "#E1E5EA",
  Silver500: "#C4CDD5",
  Silver400Alpha30: "rgba(225, 229, 234, 0.3)",

  //
  // Extended Palette
  //

  Blue50: "#EBF4FF",
  Blue300: "#0070F5",
  Blue500: "#0063DB",

  Green50: "#ECF9EF",
  Green300: "#03872F",
  Green500: "#007A29",

  Purple50: "#EFEEFC",
  Purple300: "#6559CF",
  Purple500: "#473ABB",

  Red50: "#FFEDEB",
  Red300: "#E5230D",
  Red300Aplha20: "rgba(229, 35, 13, 0.2)",
  Red500: "#C31909",

  Teal50: "#E3F6FC",
  Teal300: "#007EAB",
  Teal500: "#00678A",

  Yellow50: "#FFF7DC",
  Yellow300: "#E8671C",
  Yellow500: "#B84807",
} as const;

// `ColorDark`: Represents the color palette for dark themes.
//     - Tailored for dark theme usage.
//     - Update colors by modifying the associated values.

export const ColorDark = {
  White: "#151B22",
  White50: "rgba(21, 27, 34, 0.5)",
  White40: "rgba(21, 27, 34, 0.4)",
  White20: "rgba(21, 27, 34, 0.2)",
  White10: "rgba(21, 27, 34, 0.1)",
  White08: "rgba(21, 27, 34, 0.08)",
  Transparent: "rgba(0, 0, 0, 0)",

  Black: "#000",
  Black50: "rgba(0, 0, 0, 0.5)",
  Black20: "rgba(0, 0, 0, 0.2)",

  //Colors with 30% opacity
  Dark30: "rgba(143, 148, 158, 0.3)",
  Blue30: "rgba(0, 112, 245, 0.3)",
  Green30: "rgba(3, 135, 47, 0.3)",
  Red30: "rgba(229, 35, 13, 0.3)",
  Silver30: "rgba(225, 229, 234, 0.3)",

  //Colors with 10% opacity
  Blue10: "rgba(0, 112, 245, 0.1)",
  Red10: "rgba(195, 25, 9, 0.1)",

  //
  // Legacy Neutral Colors
  //

  /**@deprecated Use Dark100 */
  Grey100: "#8F949E",
  /**@deprecated Use Dark200 */
  Grey200: "#6A707C",
  /**@deprecated Use Dark300 */
  Grey300: "#5B6371",
  /**@deprecated Use Dark400 */
  Grey400: "#323C4E",
  /**@deprecated Use Dark450 */
  Grey450: "#222F44",
  /**@deprecated Use Dark500 */
  Grey500: "#192334",

  /** @deprecated */
  Dark200: "#6A707C",
  /** @deprecated */
  Dark400: "#323C4E",
  /** @deprecated */
  Dark450: "#222F44",

  /** @deprecated */
  Silver100: "#F6F7F8",
  /** @deprecated */
  Silver300: "#E8ECF0",

  //
  // Legacy Extended Palette
  //

  /** @deprecated */
  Blue75: "#CCE5FF",
  /** @deprecated */
  Blue100: "#A8D1FF",
  /** @deprecated */
  Blue200: "#66ADFF",
  /** @deprecated */
  Blue400: "#0063DB",

  /** @deprecated */
  Green75: "#C8F4D1",
  /** @deprecated */
  Green100: "#90EAAE",
  /** @deprecated */
  Green200: "#5DDA87",
  /** @deprecated */
  Green400: "#1E8F46",

  /** @deprecated */
  Purple75: "#DCDBF5",
  /** @deprecated */
  Purple100: "#CBC8EE",
  /** @deprecated */
  Purple200: "#A7A1E8",
  /** @deprecated */
  Purple400: "#473ABB",

  /** @deprecated */
  Red75: "#FDD9D3",
  /** @deprecated */
  Red100: "#FDC2BA",
  /** @deprecated */
  Red200: "#FE988B",
  /** @deprecated */
  Red400: "#D9210D",

  /** @deprecated */
  Teal75: "#BEEDF9",
  /** @deprecated */
  Teal100: "#91E3F8",
  /** @deprecated */
  Teal200: "#61D3EF",
  /** @deprecated */
  Teal400: "#008DB8",

  /** @deprecated */
  Yellow75: "#FFF1C2",
  /** @deprecated */
  Yellow100: "#FFE494",
  /** @deprecated */
  Yellow200: "#FFDC6B",
  /** @deprecated */
  Yellow400: "#FFA91F",

  //
  // Neutral Colors
  //

  Dark50: "rgba(25, 35, 52, 0.5)",
  Dark100: "#6E7A8A",
  Dark300: "#AEB4BD",
  Dark500: "#FFFFFF",

  Silver200: "#0D1017",
  Silver400: "#30373D",
  Silver500: "#47505B",
  Silver400Alpha30: "rgba(48, 55, 61, 0.3)",

  //
  // Extended Palette
  //

  Blue50: "#0E2947",
  Blue300: "#0070F5",
  Blue500: "#55ADFF",

  Green50: "#092E16",
  Green300: "#03872F",
  Green500: "#5EE18A",

  Purple50: "#262247",
  Purple300: "#6559CF",
  Purple500: "#BFA0FF",

  Red50: "#3D0A06",
  Red300: "#E5230D",
  Red300Aplha20: "rgba(233, 27, 12, 0.3)",
  Red500: "#FF6359",

  Teal50: "#11333D",
  Teal300: "#007EAB",
  Teal500: "#31C7F5",

  Yellow50: "#33200A",
  Yellow300: "#E8671C",
  Yellow500: "#FCA542",
} as const;

// `ColorDynamic`: Represents a newer version of the color palette using CSS variables.
//   - Designed for more dynamic theming using CSS custom properties.
//   - Update colors by changing the CSS variable references.

export const ColorDynamic = {
  White: "var(--sd-white)",
  White50: "var(--sd-white-50)",
  White40: "var(--sd-white-40)",
  White20: "var(--sd-white-20)",
  White10: "var(--sd-white-10)",
  White08: "var(--sd-white-08)",
  Transparent: "var(--sd-transparent)",

  Black: "var(--sd-black)",
  Black50: "var(--sd-black-50)",
  Black20: "var(--sd-black-20)",

  // Colors with 30% opacity
  Dark30: "var(--sd-dark-30)",
  Blue30: "var(--sd-blue-30)",
  Green30: "var(--sd-green-30)",
  Red30: "var(--sd-red-30)",
  Silver30: "var(--sd-silver-30)",

  // Colors with 10% opacity
  Blue10: "var(--sd-blue-10)",
  Red10: "var(--sd-red-10)",

  // Legacy Neutral Colors
  /**@deprecated Use Dark100 */
  Grey100: "var(--sd-grey-100)",
  /**@deprecated Use Dark200 */
  Grey200: "var(--sd-grey-200)",
  /**@deprecated Use Dark300 */
  Grey300: "var(--sd-grey-300)",
  /**@deprecated Use Dark400 */
  Grey400: "var(--sd-grey-400)",
  /**@deprecated Use Dark450 */
  Grey450: "var(--sd-grey-450)",
  /**@deprecated Use Dark500 */
  Grey500: "var(--sd-grey-500)",

  /** @deprecated */
  Dark200: "var(--sd-dark-200)",
  /** @deprecated */
  Dark400: "var(--sd-dark-400)",
  /** @deprecated */
  Dark450: "var(--sd-dark-450)",

  /** @deprecated */
  Silver100: "var(--sd-silver-100)",
  /** @deprecated */
  Silver300: "var(--sd-silver-300)",

  // Legacy Extended Palette
  /** @deprecated */
  Blue75: "var(--sd-blue-75)",
  /** @deprecated */
  Blue100: "var(--sd-blue-100)",
  /** @deprecated */
  Blue200: "var(--sd-blue-200)",
  /** @deprecated */
  Blue400: "var(--sd-blue-400)",

  /** @deprecated */
  Green75: "var(--sd-green-75)",
  /** @deprecated */
  Green100: "var(--sd-green-100)",
  /** @deprecated */
  Green200: "var(--sd-green-200)",
  /** @deprecated */
  Green400: "var(--sd-green-400)",

  /** @deprecated */
  Purple75: "var(--sd-purple-75)",
  /** @deprecated */
  Purple100: "var(--sd-purple-100)",
  /** @deprecated */
  Purple200: "var(--sd-purple-200)",
  /** @deprecated */
  Purple400: "var(--sd-purple-400)",

  /** @deprecated */
  Red75: "var(--sd-red-75)",
  /** @deprecated */
  Red100: "var(--sd-red-100)",
  /** @deprecated */
  Red200: "var(--sd-red-200)",
  /** @deprecated */
  Red400: "var(--sd-red-400)",

  /** @deprecated */
  Teal75: "var(--sd-teal-75)",
  /** @deprecated */
  Teal100: "var(--sd-teal-100)",
  /** @deprecated */
  Teal200: "var(--sd-teal-200)",
  /** @deprecated */
  Teal400: "var(--sd-teal-400)",

  /** @deprecated */
  Yellow75: "var(--sd-yellow-75)",
  /** @deprecated */
  Yellow100: "var(--sd-yellow-100)",
  /** @deprecated */
  Yellow200: "var(--sd-yellow-200)",
  /** @deprecated */
  Yellow400: "var(--sd-yellow-400)",

  //
  // Neutral Colors
  //

  Dark50: "var(--sd-dark-50)",
  Dark100: "var(--sd-dark-100)",
  Dark300: "var(--sd-dark-300)",
  Dark500: "var(--sd-dark-500)",

  Silver200: "var(--sd-silver-200)",
  Silver400: "var(--sd-silver-400)",
  Silver500: "var(--sd-silver-500)",
  Silver400Alpha30: "var(--sd-silver-400-alpha-30)",

  //
  // Extended Palette
  //

  Blue50: "var(--sd-blue-50)",
  Blue300: "var(--sd-blue-300)",
  Blue500: "var(--sd-blue-500)",

  Green50: "var(--sd-green-50)",
  Green300: "var(--sd-green-300)",
  Green500: "var(--sd-green-500)",

  Purple50: "var(--sd-purple-50)",
  Purple300: "var(--sd-purple-300)",
  Purple500: "var(--sd-purple-500)",

  Red50: "var(--sd-red-50)",
  Red300: "var(--sd-red-300)",
  Red500: "var(--sd-red-500)",
  Red300Aplha20: "var(--sd-red-300-alpha-20)",

  Teal50: "var(--sd-teal-50)",
  Teal300: "var(--sd-teal-300)",
  Teal500: "var(--sd-teal-500)",

  Yellow50: "var(--sd-yellow-50)",
  Yellow300: "var(--sd-yellow-300)",
  Yellow500: "var(--sd-yellow-500)",
} as const;
