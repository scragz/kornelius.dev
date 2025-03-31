/**
 * @description
 * Mantine theme overrides for the Kornelius marketing site.
 * This file defines the custom theme settings, including fonts, colors,
 * spacing, and other visual elements to achieve the desired nu metal/Myspace aesthetic.
 *
 * Key features:
 * - Custom font family (placeholder, replace with actual font name)
 * - Custom color palette (placeholder, define primary and accent colors)
 * - Potential overrides for spacing, breakpoints, component styles, etc.
 *
 * @dependencies
 * - @mantine/core: Provides the MantineThemeOverride type and base theme structure.
 *
 * @notes
 * - The font family and color palette are placeholders and should be updated
 *   with the specific assets and design choices for the Kornelius brand.
 * - Additional theme properties can be added here as needed to customize
 *   Mantine components further.
 */
import { MantineThemeOverride, DEFAULT_THEME } from '@mantine/core'; // Import DEFAULT_THEME for color generation help if needed

// Helper function to create a basic 10-shade array from a single color
// (This is a very basic placeholder generator)
const createColorShades = (color: string): [string, string, string, string, string, string, string, string, string, string] => {
  // You might want a more sophisticated way to generate shades,
  // or define them manually based on your design.
  // For now, just placing the color at index 6 and using placeholders.
  const shades: [string, string, string, string, string, string, string, string, string, string] = [
    '#f5f5f5', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575',
    '#616161', color, '#424242', '#303030', '#212121' // Placeholder shades around the main color at index 6
  ];
  // A slightly better approach might involve libraries like tinycolor2 if complex shade generation is needed.
  return shades;
};


const theme: MantineThemeOverride = {
  // Set base font family
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',

  // Define heading fonts - simplified approach
  // We rely on global CSS in index.css for h1-h4 font families due to theme structure issues.
  // This setting primarily affects h5, h6 or acts as a fallback.
  headings: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    // Define font sizes if needed, otherwise defaults or global CSS will apply
    // sizes: {
    //   h1: { fontSize: '2rem' }, // Sizes can still be set here if needed
    //   h2: { fontSize: '1.4rem' },
    //   h3: { fontSize: '1.2rem' },
    //   h4: { fontSize: '1rem' },
    // }
  },

  // Define custom colors based on CSS variables
  colors: {
    // Using the helper to create basic shade arrays
    keyword: createColorShades('#ff7b72'), // --keyword-color
    function: createColorShades('#d2a8ff'), // --function-color
    type: createColorShades('#79c0ff'), // --type-color
    comment: createColorShades('#8b949e'), // --comment-color
    string: createColorShades('#a5d6ff'), // --string-color
    placeholder: createColorShades('#6a737d'), // --vscode-input-placeholderForeground

    // Keep or replace default primary/accent if needed, or remove if unused
    // Example placeholder colors:
    primary: [ // Example using default Mantine gray
      DEFAULT_THEME.colors.gray[0],
      DEFAULT_THEME.colors.gray[1],
      DEFAULT_THEME.colors.gray[2],
      DEFAULT_THEME.colors.gray[3],
      DEFAULT_THEME.colors.gray[4],
      DEFAULT_THEME.colors.gray[5],
      DEFAULT_THEME.colors.gray[6],
      DEFAULT_THEME.colors.gray[7],
      DEFAULT_THEME.colors.gray[8],
      DEFAULT_THEME.colors.gray[9],
    ],
    accent: createColorShades('#ff47a3'), // Example accent using the helper
  },

  // Set default color scheme if desired (or keep 'auto')
  // primaryColor: 'primary', // Example: Set the default primary color name
  // defaultColorScheme: 'dark', // Force dark mode

  // Add other theme overrides here (e.g., spacing, radius, component styles)
  // Example component override:
  // components: {
  //   Button: {
  //     styles: (theme) => ({
  //       root: {
  //         border: `2px solid ${theme.colors.keyword[6]}`, // Example using custom color
  //         '&:hover': {
  //           backgroundColor: theme.colors.function[1],
  //         },
  //       },
  //     }),
  //   },
  // },
};

export default theme;
