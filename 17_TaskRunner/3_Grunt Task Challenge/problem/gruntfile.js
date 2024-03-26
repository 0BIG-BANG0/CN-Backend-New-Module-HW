module.exports = function (grunt) {
  grunt.initConfig({
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /ninjacoding.com/g,
              replacement: "codingninjas.com",
            },
          ],
        },
        files: [
          {
            expand: true,
            cwd:"src/",
            src: ["index.html"],
            dest: "build/",
          },
        ],
      },
    },
  });
  grunt.loadNpmTasks("grunt-replace");
  grunt.registerTask("default", ["replace"]);
  // Add debugging output
  grunt.registerTask("debug", function () {
    console.log(grunt.config("replace"));
  });
};
