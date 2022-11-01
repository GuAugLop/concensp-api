import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/arquivos");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export default multer({ storage: storage });
