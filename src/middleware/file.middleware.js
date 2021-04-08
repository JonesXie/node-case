const path = require("path");
const Multer = require("koa-multer");
const Jimp = require("jimp");

const { PICTURE_PATH } = require("../constants/file-path");

const storage = Multer.diskStorage({
  // 文件保存地址，是个函数
  destination: (req, file, cb) => {
    // cb=callback 回调。第一个参数为错误信息，第二个为返回值
    cb(null, PICTURE_PATH);
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname); // 上传原始文件名
    cb(null, new Date().getTime() + path.extname(file.originalname)); // 获取文件后缀名 path.extname
  },
});

const uploadPic = Multer({
  storage,
});

const multStorage = Multer.diskStorage({
  // 文件保存地址，是个函数
  destination: (req, file, cb) => {
    // cb=callback 回调。第一个参数为错误信息，第二个为返回值
    cb(null, PICTURE_PATH);
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname); // 上传原始文件名
    cb(null, new Date().getTime() + path.extname(file.originalname)); // 获取文件后缀名 path.extname
  },
});

const uploadPics = Multer({
  storage: multStorage,
});

// const uploadPics = Multer({
//   dest: PICTURE_PATH,
// });

/**处理保存单个图片 */
const picHandler = uploadPic.single("picture");

/**处理保存多个(5)图片 */
const picsHandler = uploadPics.array("pictures", 5);

/**复制不同大小图片 */
const pictureResize = async (ctx, next) => {
  try {
    // 1.获取所有的图像信息
    const files = ctx.req.files;

    // 2.对图像进行处理(sharp/jimp)
    for (let file of files) {
      const nameArr = file.filename.split(".");
      const destPath = path.join(file.destination, nameArr[0]);
      Jimp.read(file.path).then((image) => {
        image.resize(1280, Jimp.AUTO).write(`${destPath}-large.${nameArr[1]}`);
        image.resize(640, Jimp.AUTO).write(`${destPath}-middle.${nameArr[1]}`);
        image.resize(320, Jimp.AUTO).write(`${destPath}-small.${nameArr[1]}`);
      });
    }
    await next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  picHandler,
  picsHandler,
  pictureResize,
};
