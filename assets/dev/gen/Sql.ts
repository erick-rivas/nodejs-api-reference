import DiscoveryCourse from "@models/DiscoveryCourse";
import DiscoveryItem from "@models/DiscoveryItem";
import DiscoveryProgress from "@models/DiscoveryProgress";
import DiscoverySection from "@models/DiscoverySection";
import Locale from "@models/Locale";
  
  interface Sql
  {
    getDiscoveryCourseList(): Promise<DiscoveryCourse[]>;
    saveDiscoveryCourse(discoveryCourse: DiscoveryCourse): Promise<DiscoveryCourse>;
    getDiscoveryCourseDetails(discoveryCourseId: number): Promise<DiscoveryCourse>;
    setDiscoveryCourse(discoveryCourseId: number, lName): Promise<DiscoveryCourse>;
    deleteDiscoveryCourse(discoveryCourseId: number): Promise<void>;
    getDiscoveryItemList(courseId,sectionId): Promise<DiscoveryItem[]>;
    saveDiscoveryItem(discoveryItem: DiscoveryItem): Promise<DiscoveryItem>;
    getDiscoveryItemDetails(discoveryItemId: number): Promise<DiscoveryItem>;
    setDiscoveryItem(discoveryItemId: number, index,videoUrl,videoId,source,sectionIndex,lText,lTitle): Promise<DiscoveryItem>;
    deleteDiscoveryItem(discoveryItemId: number): Promise<void>;
    getDiscoveryProgressList(): Promise<DiscoveryProgress[]>;
    saveDiscoveryProgress(discoveryProgress: DiscoveryProgress): Promise<DiscoveryProgress>;
    getDiscoveryProgressDetails(discoveryProgressId: number): Promise<DiscoveryProgress>;
    deleteDiscoveryProgress(discoveryProgressId: number): Promise<void>;
    setDiscoveryProgress(discoveryProgressId: number, value): Promise<DiscoveryProgress>;
    getDiscoverySectionList(courseId): Promise<DiscoverySection[]>;
    saveDiscoverySection(discoverySection: DiscoverySection): Promise<DiscoverySection>;
    getDiscoverySectionDetails(discoverySectionId: number): Promise<DiscoverySection>;
    setDiscoverySection(discoverySectionId: number, index,lName,lDescription,courseId): Promise<DiscoverySection>;
    deleteDiscoverySection(discoverySectionId: number): Promise<void>;
    getLocaleList(lang): Promise<Locale[]>;
    saveLocale(locale: Locale): Promise<Locale>;
    getLocaleDetails(localeId: number): Promise<Locale>;
    deleteLocale(localeId: number): Promise<void>;
    setLocale(localeId: number, value,langId): Promise<Locale>;
  }
  
  export default Sql;