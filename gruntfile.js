module.exports = grunt => { 
    require('load-grunt-tasks')(grunt);
 
    grunt.initConfig({
    	stylus: {
		  build: {
		    options: {
		      linenos: true,
		      compress: false
		    },
		    files: [{
		      expand: true,
		      cwd: 'styles/stylus/',
		      src: [ '**/*.styl' ],
		      dest: 'styles/',
		      ext: '.css'
		    }]
		  }
		},
		watch: {
		  css: {
		    files: '**/*.styl',
		    tasks: ['stylus', 'browserSync'],
		    options: {
		      livereload: {
		        host: 'localhost',
		        port: 9000,
		    	}
		    },
		  },
		},
		browserSync: {
		    bsFiles: {
		        src : './'
		    },
		    options: {
		        server: {
		            baseDir: "./"
		        }
		    }
		},
    });
    grunt.registerTask('default', ['watch']);
};