const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.options({
    postCss: [
        require("autoprefixer")({
            grid: "autoplace"
        }),
        require("css-mqpacker")({
            sort: true
        })
    ],
    hmrOptions: {
        host: 'myrmecophoto.test',
        port: 8080
    }
});

if (mix.inProduction()) {
    mix.version();

    mix.options({
        postCss: [
            require("cssnano")({
                grid: "autoplace"
            })
        ]
    });
}
