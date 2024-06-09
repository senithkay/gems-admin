export class FormDefinition implements ColumnChild {
  formId: number = 0;
  formComponents: FormComponents[] = [];
}

export class FormComponents {
  columnID: number = 0;
  key : number = 0;
  children: ColumnChild[] = [];
}

export class Field implements ColumnChild {
  fieldID: number = 0;
  label: string = "";
  type: string = "";
  id: string = "";
  placeHolder: string = "";
}

export interface ColumnChild {}

export class FormDefBuilder {
  formDefinition: FormDefinition = new FormDefinition();

  constructor(formDef: any) {
    if (formDef.formId !== undefined) {
      this.formDefinition.formId = formDef.formId;
    }
    if (formDef.formComponents !== undefined) {
      const formComponentBuilder = new FormComponentBuilder(
        formDef.formComponents
      );
      this.formDefinition.formComponents = formComponentBuilder.getComponent();
    }
  }
  getComponent() {
    return this.formDefinition;
  }
}

export class FormComponentBuilder {
  formComponents: FormComponents[] = [];

  constructor(formComponents: any[]) {
    formComponents.forEach((element) => {
      let formComponent: FormComponents = new FormComponents();
      if (element.columnID !== undefined) {
        formComponent.columnID = element.columnID;
      }
      if (element.key !== undefined) {
        formComponent.key = element.key;
      }
      if (element.children !== undefined) {
        const columnChildBuilder: ColumnChildBuilder = new ColumnChildBuilder(
          element.children
        );
        formComponent.children = columnChildBuilder.getComponent();
      }
      this.formComponents.push(formComponent);
    });
  }

  getComponent() {
    return this.formComponents;
  }
}

export class ColumnChildBuilder {
  columnChild: ColumnChild[] = [];

  constructor(children: any[]) {
    children.forEach((child) => {
      let columnChild: ColumnChild;
      if (FormHelper.isField(child)) {
        columnChild = this.FieldBuilder(child);
      } else {
        columnChild = this.formDefBuilder(child);
      }
      this.columnChild.push(columnChild);
    });
  }

  getComponent() {
    return this.columnChild;
  }

  FieldBuilder(element: any): Field {
    let field: Field = new Field();
    if (element.id !== undefined) {
      field.id = element.id;
    }
    if (element.label !== undefined) {
      field.label = element.label;
    }
    if (element.type !== undefined) {
      field.type = element.type;
    }
    if (element.fieldID !== undefined) {
      field.fieldID = element.fieldID;
    }
    if (element.placeHolder !== undefined) {
      field.placeHolder = element.placeHolder;
    }
    return field;
  }

  formDefBuilder(element: any): FormDefinition {
    let formdef: FormDefinition = new FormDefinition();

    if (element.formId !== undefined) {
      formdef.formId = element.formId;
    }
    if (element.formComponents !== undefined) {
      const formComponentBuilder: FormComponentBuilder =
        new FormComponentBuilder(element.formComponents);
      formdef.formComponents = formComponentBuilder.getComponent();
    }
    return formdef;
  }
}

export class FieldsBuilder {
  fields: Field[] = [];

  constructor(fields: any[]) {
    fields.forEach((element) => {
      let field: Field = new Field();
      if (element.id !== undefined) {
        field.id = element.id;
      }
      if (element.label !== undefined) {
        field.label = element.label;
      }
      if (element.type !== undefined) {
        field.type = element.type;
      }
      if (element.fieldID !== undefined) {
        field.fieldID = element.fieldID;
      }
      if (element.placeHolder !== undefined) {
        field.placeHolder = element.placeHolder;
      }
      this.fields.push(field);
    });
  }

  getComponent() {
    return this.fields;
  }
}

export class FormHelper {
  static isField(json: any): boolean {
    if (
      json === undefined ||
      json.fieldID === undefined ||
      json.label === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }
}
