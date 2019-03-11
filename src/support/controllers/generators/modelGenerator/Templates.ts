const MODEL_TEMPLATE =
  `
import Model from "@util/Model";
#imports#

class #Model# extends Model
{ #gets#
  id: number;
  #attrs#

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(attrs: { #args# }): #Model#
  {
    #assigns#
    return this;
  }

  toJSON()
  {
    return {
      #toJSON#
    };
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
{
  transform(data: any): #Model#  
  {
    return new #Model#(data.#model_id#)
      .build({
        #attrs#
      });
  }
}
`;

const CONST_TEMPLATE =
  `
#content#

export { #defs#}
`;

const MOCK_TEMPLATE =
  `
import Generator from "@util/Generator";
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