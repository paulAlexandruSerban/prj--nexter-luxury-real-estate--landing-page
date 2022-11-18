export const paths = {
  src: {
    meta: {
      metaFiles: "./source/meta/*"
    },
    assets: {
      assetFiles: ["../../assets/dist/**/*"],
      svgFiles: ["dist/assets/svgs"]
    },
    html: {
      htmlDir: "./source",
      htmlFiles:"./source/html/*.html"
    },
    styles: {
      scssDir: `../living-style-guide/source/`,
      scssFiles: [`../living-style-guide/source/**/*.scss`],
      scssPages: [`../living-style-guide/source/**/*.page.scss`],
    }
  },
  dist: {
    dir: `./dist`,
  },
};
