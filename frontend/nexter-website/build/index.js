import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";

import { lintHtml } from "./tasks/lintHtml";
import { lintScss } from "./tasks/lintScss";

import { compileHtml } from "./tasks/compileHtml";
import { compileScss } from "./tasks/compileScss";

import { processMetaFiles } from "./tasks/processMetaFiles";
import { processAssets } from "./tasks/processAssets";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

task("lint", parallel(lintHtml, lintScss));
task("build", series(clean, processAssets, parallel(processMetaFiles, compileHtml, compileScss)));

task("watch", () => {
  watch(paths.src.html.htmlFiles, series(lintHtml, compileHtml));
  watch(paths.src.styles.scssFiles, series(lintScss, compileScss));
});
