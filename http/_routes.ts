import { Router } from "express";
import PetCtrl from "@controllers/_pets";
import ToyCtrl from "@controllers/_toys";

class Routes
{
  private router: Router;
  private petCtrl: PetCtrl;
  private toyCtrl: ToyCtrl;

  constructor()
  {
    this.router = Router();
    this.petCtrl = new PetCtrl();
    this.toyCtrl = new ToyCtrl();
  }

  init(): Router
  {

    /**
   * @api {get} /pets/:id Get pet details
   * @apiName GetPetDetails
   * @apiGroup Pets
   * @apiVersion 1.0.0
   *
   * @apiParam {Number} id Pet identifier.
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
      {
        "id": 1,
        "name": "Frida",
        "animal": "Dog",
        "photo": "https://www.debate.com.mx/export/sites/debate/img/2017/10/13/frida_ap2.jpeg_715265926.jpeg",
        "toys": [@toys]
      }
    */

    this.router.get("/pets/:id", (req, res) => this.petCtrl.getPet(req, res));

    /**
     * @api {get} /pets Get pet list
     * @apiName GetPetList
     * @apiGroup Pets
     * @apiVersion 1.0.0
    */

    this.router.get("/pets", (req, res) => this.petCtrl.getPets(req, res));

    /**
     * @api {post} /pets Save a pet
     * @apiName SavePet
     * @apiGroup Pets
     * @apiVersion 1.0.0
     *
     * @apiParam {String} name Pet name.
     * @apiParam {String} animal Animal name (Dog, Cat, etc).
     * @apiParam {String} [photo] Pet photo.
     * @apiParam {Number[]} [toys] Toys identifiers
     * 
     * @apiSuccess {Pet} pet Pet object.
    */

    this.router.post("/pets", (req, res) => this.petCtrl.savePet(req, res));

    /**
     * @api {put} /pets/:id Update a pet
     * @apiName UpdatePet
     * @apiGroup Pets
     * @apiVersion 1.0.0
     *
     * @apiParam {Number} id Pet identifier.
     * @apiParam {String} [name] name Pet name.
     * @apiParam {String} [photo] Pet photo 
     * @apiParam {Number[]} [toys] Toys Toys identifiers.
     * 
     * @apiSuccess {Pet} pet Pet object.
    */

    this.router.put("/pets/:id", (req, res) => this.petCtrl.updatePet(req, res));

    /**
     * @api {delete} /pets/:id Delete a pet
     * @apiName DeletePet
     * @apiGroup Pets
     * @apiVersion 1.0.0
     * 
     * @apiParam {Number} id Pet identifier.
    */

    this.router.delete("/pets/:id", (req, res) => this.petCtrl.deletePet(req, res));


    /**
     * @api {get} /toys Get toys list
     * @apiName GetToyList
     * @apiGroup Toys
     * @apiVersion 1.0.0
     * 
     * @apiParam {number} [pet_id] Pet identifier of toys.
    */

    this.router.get("/toys", (req, res) => this.toyCtrl.getToys(req, res));


    return this.router;
  }

}

export default Routes;
