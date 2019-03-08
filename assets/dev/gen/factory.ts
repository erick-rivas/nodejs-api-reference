import Sql from "@sql/Source";
import DiscoveryCourses from "@controllers/DiscoveryCourses";
import DiscoveryItems from "@controllers/DiscoveryItems";
import DiscoveryProgresses from "@controllers/DiscoveryProgresses";
import DiscoverySections from "@controllers/DiscoverySections";
import Locales from "@controllers/Locales";

class Controllers
{
  static createDiscoveryCourses()
  {
    return new DiscoveryCourses(
      Sql.getInstance());
  }

static createDiscoveryItems()
  {
    return new DiscoveryItems(
      Sql.getInstance());
  }

static createDiscoveryProgresses()
  {
    return new DiscoveryProgresses(
      Sql.getInstance());
  }

static createDiscoverySections()
  {
    return new DiscoverySections(
      Sql.getInstance());
  }

static createLocales()
  {
    return new Locales(
      Sql.getInstance());
  }
}

export default Controllers;