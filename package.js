Package.describe({
    name: 'canotto90:meteor-status',
    version: '1.1.1',
    summary: 'Meteor Status automatically alerts users when the connection to the server has been lost.',
    git: 'https://github.com/taromero/meteor-status',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use(['templating', 'session', 'tracker', 'jquery'], 'client');
    api.addFiles(['client/meteor-status.html', 'client/meteor-status.js', 'client/meteor-status.css'], 'client');
});
