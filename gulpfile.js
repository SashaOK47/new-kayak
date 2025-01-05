import gulp from 'gulp';
import browserSync from 'browser-sync';

import { paths } from './gulp/config/paths.js';
import { htmlInclude } from './gulp/tasks/html-include.js';
import { htmlMinify } from './gulp/tasks/html-minify.js';
import { clean } from './gulp/tasks/clean.js';
import { resources } from './gulp/tasks/resources.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { images } from './gulp/tasks/images.js';
import { webpImages } from './gulp/tasks/webp.js';

global.app = {
    gulp,
    isProd: process.argv.includes('--build'),
    paths,
}

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: `${app.paths.base.build}`
        },
        notify: false,
        port: 3000,
    });

    gulp.watch(`${app.paths.srcPartialsFolder}/*.html`, htmlInclude);
    gulp.watch(`${app.paths.base.src}/*.html`, htmlInclude);
    gulp.watch(app.paths.srcScss, styles);
    gulp.watch(app.paths.srcFullJs, scripts);
    gulp.watch(`${app.paths.resourcesFolder}/**`, resources);
    gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`, images);
    gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png}`, webpImages);
}

const dev = gulp.series(clean, htmlInclude, styles, scripts, images, webpImages, resources, watcher);
const build = gulp.series(clean, htmlInclude, styles, scripts, images, webpImages, resources, htmlMinify);

export { dev };
export { build };

gulp.task('default', dev);