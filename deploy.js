var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "codeandlmw",
    // Password optional, prompted if none given
    password: "M4yzJzZnpGmEfhzELFwQQcvGgVTTn",
    host: "ftp.cluster027.hosting.ovh.net",
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/piotrmakowski",
    include: ["*", "**/*"],      // this would upload everything except dot files
    // include: ["*.html", "*.js", "*.json", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ["**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false
};

ftpDeploy.on("uploading", function(data) {
    console.log(data.totalFilesCount); // total file count being transferred
    console.log(data.transferredFileCount); // number of files transferred
    console.log(data.filename); // partial path with filename being uploaded
});
ftpDeploy.on("uploaded", function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("log", function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err);
    else console.log("finished:", res);
});

// ftpDeploy
//     .deploy(config)
//     .then(res => console.log("finished:", res))
//     .catch(err => console.log(err));