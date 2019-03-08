import { Router } from "express";
import * as path from "path";
import * as multer from "multer";

import Res from "@http-util/Responses";
import Generator from "@src-util/Generator";

var upload = multer({
  storage: multer.diskStorage(
    {
      destination: function (req, file, cb)
      {
        const rootDir = path.dirname(require.main.filename) + "/../";
        cb(null, rootDir + 'assets/public/resources')
      },
      filename: function (req, file, cb)
      {
        let extension = "";
        if (file.originalname)
          extension = "." + file.originalname.split('.').pop();
        cb(null, Generator.getId() + extension);
      }
    }
  )
});

export class Resources
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  init(): Router
  {

    /**
    * @api {post} /resource/file Save a file
    * @apiName SaveFile
    * @apiGroup Resources
    * @apiVersion 0.1.0
    * 
    * @apiParam {Object} file File data.
    * @apiSampleRequest off
    * @apiSuccess {String} url File path.
    */

    this.router.post("/file", upload.single("file"), (req, res) =>
    {
      let result = {
        url: `http://${req.get("host")}/resources/${req.file.filename}`
      }
      return Res.sendObject(res, result);
    });

    return this.router;
  }
}

export default Resources;
