let mix = require('laravel-mix');

mix.setPublicPath('public');
// mix.version();

if (mix.inProduction()) {
  mix.sourceMaps();
}

mix.sass('resources/scss/main.scss', 'public/css/main.css');
