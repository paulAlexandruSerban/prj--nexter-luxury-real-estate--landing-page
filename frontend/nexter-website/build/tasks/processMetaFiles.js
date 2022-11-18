import { src, dest, lastRun } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import debug from "gulp-debug";
import { onError } from "../utils/onError";

export const processMetaFiles = () => {
  return new Promise((resolve, reject) => {
    return src(paths.src.meta.metaFiles, { since: lastRun(processMetaFiles) })
      .pipe(
        plumber({
          errorHandler: onError,
        })
      )
      .pipe(debug({ title: "processMetaFiles : " }))
      .pipe(dest([`${paths.dist.dir}`]))
      .on("error", reject)
      .on("end", resolve);
  });
};
