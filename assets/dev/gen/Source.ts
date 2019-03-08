import Repository from "@repositories/sql";
import { Pair } from "@src-util/Util";
import DiscoveryCourse from "@models/DiscoveryCourse";
import DiscoveryItem from "@models/DiscoveryItem";
import DiscoveryProgress from "@models/DiscoveryProgress";
import DiscoverySection from "@models/DiscoverySection";
import Locale from "@models/Locale";

import Executor from "@sql/Executor";
import * as Mapper from "@sql/Mappers";

class Source extends Executor implements Repository
{
  async getDiscoveryCourseList(): Promise<DiscoveryCourse[]>
    {
      const query =
        `SELECT d.* FROM discovery_course d`;
      const filter = [];
      //TODO FILTERS
      const res = await this.get(query, filter, new Mapper.DiscoveryCourseMapper());
      return res; 
    }

    async saveDiscoveryCourse(discoveryCourse: DiscoveryCourse): Promise<DiscoveryCourse>
    {
      //TODO
    }

    async getDiscoveryCourseDetails(discoveryCourseId: number): Promise<DiscoveryCourse>
    {
      const query =
        `SELECT d.* FROM discovery_course d WHERE d.discovery_course_id = ?`;
      const params = [discoveryCourseId];
      const res = await this.getDetails(query, params, new Mapper.DiscoveryCourseMapper());
      return res[0];
    }

    async setDiscoveryCourse(discoveryCourseId: number, lName): Promise<DiscoveryCourse>
    {
      const query = "UPDATE discovery_course";
      const columns = [];
      //TODO COLUMNS
      await this.set(query, columns, "discovery_course_id", discoveryCourseId);
      return this.getDiscoveryCourseDetails(discoveryCourseId);
    }

    async deleteDiscoveryCourse(discoveryCourseId: number): Promise<void>
    {
      const query =
        "DELETE FROM discovery_course WHERE discovery_course_id = ?;"
      const params = [discoveryCourseId];
      return this.delete(query, params);
    }

    async getDiscoveryItemList(courseId,sectionId): Promise<DiscoveryItem[]>
    {
      const query =
        `SELECT d.* FROM discovery_item d`;
      const filter = [];
      //TODO FILTERS
      const res = await this.get(query, filter, new Mapper.DiscoveryItemMapper());
      return res; 
    }

    async saveDiscoveryItem(discoveryItem: DiscoveryItem): Promise<DiscoveryItem>
    {
      //TODO
    }

    async getDiscoveryItemDetails(discoveryItemId: number): Promise<DiscoveryItem>
    {
      const query =
        `SELECT d.* FROM discovery_item d WHERE d.discovery_item_id = ?`;
      const params = [discoveryItemId];
      const res = await this.getDetails(query, params, new Mapper.DiscoveryItemMapper());
      return res[0];
    }

    async setDiscoveryItem(discoveryItemId: number, index,videoUrl,videoId,source,sectionIndex,lText,lTitle): Promise<DiscoveryItem>
    {
      const query = "UPDATE discovery_item";
      const columns = [];
      //TODO COLUMNS
      await this.set(query, columns, "discovery_item_id", discoveryItemId);
      return this.getDiscoveryItemDetails(discoveryItemId);
    }

    async deleteDiscoveryItem(discoveryItemId: number): Promise<void>
    {
      const query =
        "DELETE FROM discovery_item WHERE discovery_item_id = ?;"
      const params = [discoveryItemId];
      return this.delete(query, params);
    }

    async getDiscoveryProgressList(): Promise<DiscoveryProgress[]>
    {
      const query =
        `SELECT d.* FROM discovery_progress d`;
      const filter = [];
      //TODO FILTERS
      const res = await this.get(query, filter, new Mapper.DiscoveryProgressMapper());
      return res; 
    }

    async saveDiscoveryProgress(discoveryProgress: DiscoveryProgress): Promise<DiscoveryProgress>
    {
      //TODO
    }

    async getDiscoveryProgressDetails(discoveryProgressId: number): Promise<DiscoveryProgress>
    {
      const query =
        `SELECT d.* FROM discovery_progress d WHERE d.discovery_progress_id = ?`;
      const params = [discoveryProgressId];
      const res = await this.getDetails(query, params, new Mapper.DiscoveryProgressMapper());
      return res[0];
    }

    async deleteDiscoveryProgress(discoveryProgressId: number): Promise<void>
    {
      const query =
        "DELETE FROM discovery_progress WHERE discovery_progress_id = ?;"
      const params = [discoveryProgressId];
      return this.delete(query, params);
    }

    async setDiscoveryProgress(discoveryProgressId: number, value): Promise<DiscoveryProgress>
    {
      const query = "UPDATE discovery_progress";
      const columns = [];
      //TODO COLUMNS
      await this.set(query, columns, "discovery_progress_id", discoveryProgressId);
      return this.getDiscoveryProgressDetails(discoveryProgressId);
    }

    async getDiscoverySectionList(courseId): Promise<DiscoverySection[]>
    {
      const query =
        `SELECT d.* FROM discovery_section d`;
      const filter = [];
      //TODO FILTERS
      const res = await this.get(query, filter, new Mapper.DiscoverySectionMapper());
      return res; 
    }

    async saveDiscoverySection(discoverySection: DiscoverySection): Promise<DiscoverySection>
    {
      //TODO
    }

    async getDiscoverySectionDetails(discoverySectionId: number): Promise<DiscoverySection>
    {
      const query =
        `SELECT d.* FROM discovery_section d WHERE d.discovery_section_id = ?`;
      const params = [discoverySectionId];
      const res = await this.getDetails(query, params, new Mapper.DiscoverySectionMapper());
      return res[0];
    }

    async setDiscoverySection(discoverySectionId: number, index,lName,lDescription,courseId): Promise<DiscoverySection>
    {
      const query = "UPDATE discovery_section";
      const columns = [];
      //TODO COLUMNS
      await this.set(query, columns, "discovery_section_id", discoverySectionId);
      return this.getDiscoverySectionDetails(discoverySectionId);
    }

    async deleteDiscoverySection(discoverySectionId: number): Promise<void>
    {
      const query =
        "DELETE FROM discovery_section WHERE discovery_section_id = ?;"
      const params = [discoverySectionId];
      return this.delete(query, params);
    }

    async getLocaleList(lang): Promise<Locale[]>
    {
      const query =
        `SELECT l.* FROM locale l`;
      const filter = [];
      //TODO FILTERS
      const res = await this.get(query, filter, new Mapper.LocaleMapper());
      return res; 
    }

    async saveLocale(locale: Locale): Promise<Locale>
    {
      //TODO
    }

    async getLocaleDetails(localeId: number): Promise<Locale>
    {
      const query =
        `SELECT l.* FROM locale l WHERE l.locale_id = ?`;
      const params = [localeId];
      const res = await this.getDetails(query, params, new Mapper.LocaleMapper());
      return res[0];
    }

    async deleteLocale(localeId: number): Promise<void>
    {
      const query =
        "DELETE FROM locale WHERE locale_id = ?;"
      const params = [localeId];
      return this.delete(query, params);
    }

    async setLocale(localeId: number, value,langId): Promise<Locale>
    {
      const query = "UPDATE locale";
      const columns = [];
      //TODO COLUMNS
      await this.set(query, columns, "locale_id", localeId);
      return this.getLocaleDetails(localeId);
    }

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;