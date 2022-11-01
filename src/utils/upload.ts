import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "..", "public", "arquivos"));
  },
  filename: function (req, file, cb) {
    console.log(
      file.originalname.replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_")
    );
    cb(
      null,
      file.originalname.replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_")
    );
  },
});

export default multer({ storage: storage });
