
module.exports = function ( grunt ) {

  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-bump');

  grunt.initConfig({
    changelog: {
      options: {
        dest: 'CHANGELOG.md',
        template: 'changelog.tpl'
      }
    },
    bump: {
      options: {
        files: [
          "package.json" // Add bower or others here
        ],
        commit: false,
        commitMessage: 'chore(release): v%VERSION%',
        commitFiles: [
          "package.json"
        ],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'origin'
      }
    }
  });

  grunt.registerTask('release', 'Increments the minor version and creates a changelog', ['bump:minor', 'changelog']);
  
}