module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            mapbuild: {
            src: 'client/scripts/maps.js',
            dest: 'server/public/assets/scripts/maps.min.js'
    }
        },

        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest": "server/public/vendors/"
            },

            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "jquery/dist/jquery.min.js",
                    "jQuery-Plugin-For-Tabbed-Image-Slider-Navigation-Ottoman-Slider/js/jquery.ottomanslider.js"
                ],
                "dest": "server/public/vendors/"
            },

            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "index.html",
                    "contactus.html",
                    "faqs.html",
                    "servicesoffered.html",
                    "theshop.html"
                ],
                "dest": "server/public/assets/views/"
            },

            style: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/styles.css"
                ],
                "dest": "server/public/assets"
            },
            google: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'google-maps/lib/Google.min.js'
                ],
                dest: 'server/public/vendors'
            }
        }
});

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};