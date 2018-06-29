import { Router } from "express";
import * as multer from "multer"

import Util from "./controllers/util";


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
    * @api {post} /resource/image Save an image
    * @apiName SaveImage
    * @apiGroup Resources
    * 
    * @apiParam {Object} image Image data.
    * @apiSuccess {String} url Image path.
    */

    var upload = multer({
      dest: "assets/public",
    }).single("image");

    this.router.post("/image", (req, res) =>
    {
      upload(req, res, () =>
      {
        let result = {
          url: `http://${req.get("host")}/resources/${req.file.filename}`
        }
        Util.sendObject(res, result);
      });
    });

    return this.router;
  }
}

export default Resources;