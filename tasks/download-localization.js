/**
 * Downloading localizations including meta.
 */

const gulp = require('gulp');
const gutil = require('gulp-util');
const download = require('gulp-download-stream');
const md5 = require('gulp-hash-creator');
const config = require('../config/.keys.json');

function hashString(stringContent) {
    return md5({
        content: stringContent
    });
}

module.exports = () => {
    let options = global.options || {};

    options = Object.assign(options, config);

    let urls = [];

    options.locales.forEach((localization) => {
        const timestamp = Math.round(new Date().getTime() / 1000);
        let url = [];

        url.push(options.url + options.project_id);
        url.push('/translations?locale=' + localization);
        url.push('&source_file_name=' + options.sourceFile);
        url.push('&export_file_name=' + localization + '.json');
        url.push('&api_key=' + options.api_key);
        url.push('&timestamp=' + timestamp);
        url.push('&dev_hash=' + hashString(timestamp + options.secret_key));

        urls.push({
            file: localization + '.json',
            url: url.join('')
        });
    });

    options.metaLocales.forEach((localization) => {
        const timestamp = Math.round(new Date().getTime() / 1000);
        let urlMeta = [];

        urlMeta.push(options.url + options.project_id);
        urlMeta.push('/translations?locale=' + localization);
        urlMeta.push('&source_file_name=' + options.sourceFileMeta);
        urlMeta.push('&export_file_name=' + localization + '.meta.json');
        urlMeta.push('&api_key=' + options.api_key);
        urlMeta.push('&timestamp=' + timestamp);
        urlMeta.push('&dev_hash=' + hashString(timestamp + options.secret_key));

        urls.push({
            file: localization + '.meta.json',
            url: urlMeta.join('')
        });
    });

    return download(urls)
        .pipe(gulp.dest(options.localesDir));
};
