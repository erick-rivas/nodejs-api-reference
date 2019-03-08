import { Router } from "express";
import Factory from "@http/factories/Controllers";
import Pets from "@http/controllers/Pets";
import Toys from "@http/controllers/Toys";

class Routes
{
  private router: Router;
  private pets: Pets;
  private toys: Toys;

  constructor()
  {
    this.router = Router();
    this.pets = Factory.createPets();
    this.toys = Factory.createToys();
  }

  init(): Router
  {

    /**
     * @api {get} /pets/:id Get pet details
     * @apiName GetPetDetails
     * @apiGroup Pets
     * @apiVersion 0.1.0
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

    this.router.get("/pets/:id", (req, res) => this.pets.getDetails(req, res));

    /**
     * @api {get} /pets Get pet list
     * @apiName GetPetList
     * @apiGroup Pets
     * @apiVersion 0.1.0
    */

    this.router.get("/pets", (req, res) => this.pets.getList(req, res));

    /**
     * @api {post} /pets Save a pet
     * @apiName SavePet
     * @apiGroup Pets
     * @apiVersion 0.1.0
     *
     * @apiParam {String} name Pet name.
     * @apiParam {String} animal Animal name (Dog, Cat, etc).
     * @apiParam {String} [photo] Pet photo.
     * @apiParam {Number[]} [toys] Toys identifiers
     * 
     * @apiSuccess {Pet} pet Pet object.
    */

    this.router.post("/pets", (req, res) => this.pets.save(req, res));

    /**
     * @api {put} /pets/:id Update a pet
     * @apiName UpdatePet
     * @apiGroup Pets
     * @apiVersion 0.1.0
     *
     * @apiParam {Number} id Pet identifier.
     * @apiParam {String} [name] name Pet name.
     * @apiParam {String} [photo] Pet photo 
     * @apiParam {Number[]} [toys] Toys Toys identifiers.
     * 
     * @apiSuccess {Pet} pet Pet object.
    */

    this.router.put("/pets/:id", (req, res) => this.pets.update(req, res));

    /**
     * @api {delete} /pets/:id Delete a pet
     * @apiName DeletePet
     * @apiGroup Pets
     * @apiVersion 0.1.0
     * 
     * @apiParam {Number} id Pet identifier.
    */

    this.router.delete("/pets/:id", (req, res) => this.pets.delete(req, res));


    /**
     * @api {get} /toys Get toys list
     * @apiName GetToyList
     * @apiGroup Toys
     * @apiVersion 0.1.0
     * 
     * @apiParam {number} [pet_id] Pet identifier of toys.
    */

    this.router.get("/toys", (req, res) => this.toys.getList(req, res));


    return this.router;
  }

}

export default Routes;
