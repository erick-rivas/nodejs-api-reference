import { Router } from "express";
import Factory from "@http/factories/controllers";
import DiscoveryCourses from "@controllers/DiscoveryCourses";
import DiscoveryItems from "@controllers/DiscoveryItems";
import DiscoveryProgresses from "@controllers/DiscoveryProgresses";
import DiscoverySections from "@controllers/DiscoverySections";
import Locales from "@controllers/Locales";

class Routes
{
  private router: Router;
  private discoveryCourses: DiscoveryCourses;
  private discoveryItems: DiscoveryItems;
  private discoveryProgresses: DiscoveryProgresses;
  private discoverySections: DiscoverySections;
  private locales: Locales;

  constructor()
  {
    this.router = Router();
    this.discoveryCourses = Factory.createDiscoveryCourses();
    this.discoveryItems = Factory.createDiscoveryItems();
    this.discoveryProgresses = Factory.createDiscoveryProgresses();
    this.discoverySections = Factory.createDiscoverySections();
    this.locales = Factory.createLocales();
  }

  init(): Router
  {
    this.router.get("/discovery_courses", (req, res) => this.discoveryCourses.getList(req, res));;
    this.router.post("/discovery_courses", (req, res) => this.discoveryCourses.save(req, res));;
    this.router.get("/discovery_courses/:id", (req, res) => this.discoveryCourses.getDetails(req, res));;
    this.router.put("/discovery_courses/:id", (req, res) => this.discoveryCourses.update(req, res));;
    this.router.delete("/discovery_courses/:id", (req, res) => this.discoveryCourses.delete(req, res));;
    this.router.get("/discovery_items", (req, res) => this.discoveryItems.getList(req, res));;
    this.router.post("/discovery_items", (req, res) => this.discoveryItems.save(req, res));;
    this.router.get("/discovery_items/:id", (req, res) => this.discoveryItems.getDetails(req, res));;
    this.router.put("/discovery_items/:id", (req, res) => this.discoveryItems.update(req, res));;
    this.router.delete("/discovery_items/:id", (req, res) => this.discoveryItems.delete(req, res));;
    this.router.get("/discovery_progresses", (req, res) => this.discoveryProgresses.getList(req, res));;
    this.router.post("/discovery_progresses", (req, res) => this.discoveryProgresses.save(req, res));;
    this.router.get("/discovery_progresses/:id", (req, res) => this.discoveryProgresses.getDetails(req, res));;
    this.router.delete("/discovery_progresses/:id", (req, res) => this.discoveryProgresses.delete(req, res));;
    this.router.put("/discovery_progresses/:id", (req, res) => this.discoveryProgresses.update(req, res));;
    this.router.get("/discovery_sections", (req, res) => this.discoverySections.getList(req, res));;
    this.router.post("/discovery_sections", (req, res) => this.discoverySections.save(req, res));;
    this.router.get("/discovery_sections/:id", (req, res) => this.discoverySections.getDetails(req, res));;
    this.router.put("/discovery_sections/:id", (req, res) => this.discoverySections.update(req, res));;
    this.router.delete("/discovery_sections/:id", (req, res) => this.discoverySections.delete(req, res));;
    this.router.get("/locales", (req, res) => this.locales.getList(req, res));;
    this.router.post("/locales", (req, res) => this.locales.save(req, res));;
    this.router.get("/locales/:id", (req, res) => this.locales.getDetails(req, res));;
    this.router.delete("/locales/:id", (req, res) => this.locales.delete(req, res));;
    this.router.put("/locales/:id", (req, res) => this.locales.update(req, res));;
  
  return this.router;
  }
}

export default Routes;