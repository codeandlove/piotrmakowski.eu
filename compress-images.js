var compress_images = require("compress-images");
var INPUT_path_to_your_images,
    OUTPUT_path;

INPUT_path_to_your_images = "public/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg}";
OUTPUT_path = "build/images/";

compress_images(INPUT_path_to_your_images, OUTPUT_path,
    { compress_force: true, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "80"] } },
    { png: { engine: "pngquant", command: ["--quality=30-70", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: false, command: false } },
    function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
    }
);