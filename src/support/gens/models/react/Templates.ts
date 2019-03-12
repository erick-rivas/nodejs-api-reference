const MODEL_TEMPLATE =
  `
import Model from "models/util/Model";
#imports#
class #Model# implements Model
{ #gets#
  id: number;
  #attrs#

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { #args# }): #Model#
  {
    #assigns#
    return this;
  }
}

export default #Model#;
`;


const MAPPERS_TEMPLATE =
  ` 
#imports#
  
abstract class Mapper<T>
{
  transformList(dataSet: any): T[]
  {
    if (!dataSet) return [];
    const result = [];
    for (let data of dataSet)
      result.push(this.transform(data));
    return result;
  }
  abstract transform(data): T;
}
  
#content#
  
export { Mapper, #defs#}
`;

const MAPPER_TEMPLATE =
  `
class #Model#Mapper extends Mapper<#Model#>
{#mappers#
  constructor()
  {
    super();#assigns#
  }

  transform(data: any): #Model#  
  {
    return new #Model#(data.id)
      .build({
        #attrs#
      });
  }
}
`;

const CONST_TEMPLATE =
  `
enum Lang
{
  EN = "EN",
  ES = "ES"
};

/**
 * Get enum value base on their respective value
 * @param  {any} data Enum collection
 * @param  {string} val Enum value
 * @param  {any} def Default response (item)
 */

const getEnum = (data: any, val: string, def: any) =>
{
  if (val) val = val.toUpperCase();
  for (let d in data)
    if (data[d].toUpperCase() == val)
      return d;
  return def;
}

#content#

export { Lang, getEnum, #defs#}
`;

const MOCK_TEMPLATE =
  `
import Generator from "models/util/Generator";
#imports#

class Mocks
{
  #content#
}
export default Mocks;
`;

const MOCK_ITEM_TEMPLATE =
  `
static #Model#()
  {
    return [
      #data#
    ];
  }
`;

export
{
  MODEL_TEMPLATE,
  MAPPERS_TEMPLATE, MAPPER_TEMPLATE,
  CONST_TEMPLATE,
  MOCK_TEMPLATE, MOCK_ITEM_TEMPLATE
};