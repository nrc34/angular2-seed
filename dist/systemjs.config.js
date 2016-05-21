System.config({
    defaultExtension: 'js',
    map: {
        'app' : 'app',
        'rxjs': 'vendor/rxjs',

        '@angular/core'                    : 'vendor/@angular/core',
        '@angular/common'                  : 'vendor/@angular/common',
        '@angular/compiler'                : 'vendor/@angular/compiler',
        '@angular/router'                  : 'vendor/@angular/router',
        '@angular/platform-browser'        : 'vendor/@angular/platform-browser',
        '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic'
    },
    packages: {
        'app'                              : {main: 'main.js'},
        'rxjs'                             : {main: 'index.js'},
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'}
    }
});
