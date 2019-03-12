import Util from "@support/gens/Util"
import Executor from '@support/gens/models/Executor';
import Generator from "@util/Generator"
import { MOCK_TEMPLATE, MOCK_ITEM_TEMPLATE } from "@support/gens/models/api/Templates";

class GenerateMocks extends Executor
{
  async generate()
  {
    let res = MOCK_TEMPLATE.toString().trim();
    let content = "";
    let imports = "";

    for (let c of this.classes)
      content += `${Util.sp(2)}${this.getMock(c, this.levels, this.attrs[c])}\n\n`;

    for (let c of this.classes)
      imports += `import ${c} from "@lt/models/${c}";\n`;

    let hasConst = false;
    for (let c of this.classes)
      for (let co in this.consts[c]) {
        imports += `import { ${co} } from "@lt/models/helpers/Const";\n`;
        hasConst = true;
      }
    if (hasConst)
      imports += `import { getEnum } from "@util/Const";\n`;

    content = content.trim();
    imports = imports.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("/models/helpers", "Mocks.ts", res);

  }

  getMock(className: string, levels: any[], attributes: any[]): string
  {
    let res = MOCK_ITEM_TEMPLATE.toString().trim();
    let it = Math.pow(2, +levels[className] + 2);
    let model = Util.iniToUpper(className);
    let data = "";


    for (let i = 0; i < it; i++) {

      let attrs = "";
      data += `${Util.sp(6)}new ${className}(${Generator.getId()}).build({ `;

      //Attributes

      for (let a of attributes) {

        //Const

        if (a.description == "_CONST") {
          let collection = a.collection.slice(1, -1).split(",");
          attrs += `${a.name}: ${a.type}.${collection[Generator.getNum(collection.length)]},`;
        }

        //Models

        else if (a.description == "_MODEL") {
          let type = a.type.endsWith("[]") ? a.type.slice(0, -2) : a.type;
          let typeIts = Math.pow(2, +levels[type] + 3);
          if (a.type.endsWith("[]")) {
            attrs += `${a.name}: [`;
            let numEle = Generator.getNum(2) + 1;
            for (let j = 0; j < numEle; j++)
              attrs += `this.${type}()[${Generator.getNum(typeIts)}], `;
            attrs = attrs.trim().slice(0, -1);
            attrs += `], `;
          } else
            attrs += `${a.name}: this.${type}()[${Generator.getNum(typeIts)}], `;
        }

        //Description

        else if (a.description) {
          if (a.description == "name")
            attrs += `${a.name}: "${Generator.getName()}", `;
          else if (a.description == "noun")
            attrs += `${a.name}: "${Generator.getNoun()}", `;
          else if (a.description == "email")
            attrs += `${a.name}: "${Generator.getEmail()}", `;
          else if (a.description == "imageUrl")
            attrs += `${a.name}: "${Generator.getImageUrl()}", `;
        }

        //Types (default)

        else {
          if (a.type == "string")
            attrs += `${a.name}: "${Generator.getWord()}", `;
          else if (a.type == "number")
            attrs += `${a.name}: ${Generator.getNum(100)}, `;
          else if (a.type == "Date")
            attrs += `${a.name}: new Date("${Generator.getDate()}"), `;
        }
      }

      attrs = attrs.trim().slice(0, -1);
      data += `${attrs} }),\n`;
    }

    data = data.trim().slice(0, -1);
    res = res.replace(new RegExp('#Model#', 'g'), model);
    res = res.replace(new RegExp('#data#', 'g'), data);
    return res;
  }


}

export default GenerateMocks;