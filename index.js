require('sdk/page-mod').PageMod({
  include: 'https://github.com*',
  contentScriptFile: [
    './jquery-2.2.3.min.js',
    './helper.js',
    './approvers.js',
    './profile.js',
    './github-extensions.js'
  ]
});
