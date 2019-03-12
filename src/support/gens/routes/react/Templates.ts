const REPO_TEMPLATE =
  `
#imports#

interface Api
{
  #content#
}

export default Api;
`;

const REPO_GET_LIST_TEMPLATE =
  `
  get#Model#List(fs: {}): Promise<#Model#[]>; //TODO CHECK FILTERS
  //(Suggestion) -> get#Model#List(fs: { #args# }): Promise<#Model#[]>; //CHECK ARGS TYPES
`;

const REPO_GET_DETAILS_TEMPLATE =
  `
  get#Model#Details(#model#Id: number): Promise<#Model#>;
`;

const REPO_SAVE_TEMPLATE =
  `
  save#Model#(args: {}): Promise<#Model#>; //TODO CHECK ARGS
  //(Suggestion) -> save#Model#(args: { #args# }): Promise<#Model#>; //CHECK ARGS TYPES
`;

const REPO_SET_TEMPLATE =
  `
  set#Model#(#model#Id: number, args: {}): Promise<#Model#>; //TODO CHECK ARGS
  //(Suggestion) -> set#Model#(#model#Id: number, args: { #args# }): Promise<#Model#>; //CHECK ARGS TYPES
`;

const REPO_DELETE_TEMPLATE =
  `
  delete#Model#(#model#Id: number): Promise<void>;
`;

const SRC_TEMPLATE =
  `
import Repository from "sources/Api";
import { Pair } from "models/util/Util";
#imports#

import Generator from "models/util/Generator";
import Executor from "sources/api/Executor";
import * as Mapper from "sources/api/Mappers";

class Source extends Executor implements Repository
{
  #content#

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;
`;

const SRC_GET_LIST_TEMPLATE =
  `
  async get#Model#List(fs: {}): Promise<#Model#[]>
  //(Suggestion) -> async get#Model#List(fs: { #args# }): Promise<#Model#[]> //CHECK ARGS TYPES
  {
    return null;
  }
`;

const SRC_GET_DETAILS_TEMPLATE =
  `
  async get#Model#Details(#model#Id: number): Promise<#Model#>
  {
    return null;
  }
`;

const SRC_SAVE_TEMPLATE =
  `
  async save#Model#(args: {}): Promise<#Model#>
  //(Suggestion) -> async save#Model#(args: { #args# }): Promise<#Model#> //CHECK ARGS TYPES
  {
    return null;
  }
`;

const SRC_SET_TEMPLATE =
  `
  async set#Model#(#model#Id: number, args: {}): Promise<#Model#>
  //(Suggestion) -> async set#Model#(#model#Id: number, args: { #args# }): Promise<#Model#> //CHECK ARGS TYPES
  {
    return null;
  }
`;

const SRC_DELETE_TEMPLATE =
  `
  async delete#Model#(#model#Id: number): Promise<void>
  {
    return null;
  }
`;


export
{
  REPO_TEMPLATE, REPO_GET_LIST_TEMPLATE, REPO_GET_DETAILS_TEMPLATE, REPO_SAVE_TEMPLATE, REPO_SET_TEMPLATE, REPO_DELETE_TEMPLATE,
  SRC_TEMPLATE, SRC_GET_LIST_TEMPLATE, SRC_GET_DETAILS_TEMPLATE, SRC_SAVE_TEMPLATE, SRC_SET_TEMPLATE, SRC_DELETE_TEMPLATE
};