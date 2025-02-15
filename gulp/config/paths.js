const srcFolder = './src';
const buildFolder = './app';

export const paths = {
    base: {
        src: srcFolder,
        build: buildFolder,
    },
    srcSvg: `${srcFolder}/img/svg/**.svg`,
    srcImgFolder: `${srcFolder}/img`,
    buildImgFolder: `${buildFolder}/img`,
    srcScss: `${srcFolder}/scss/**/*.scss`,
    buildCssFolder: `${buildFolder}/css`,
    srcFullJs: `${srcFolder}/js/**/*.js`,
    srcMainJs: `${srcFolder}/js/app.js`,
    buildJsFolder: `${buildFolder}/js`,
    srcPartialsFolder: `${srcFolder}/partials`,
    resourcesFolder: `${srcFolder}/resources`,
};