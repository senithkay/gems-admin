"use client";
import React from "react";
import { Field, FormDefinition } from "./formDefinition";
import {
  LabelInputContainer,
  BottomGradient,
} from "@/components/LabelInputContainer";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { FormHelper } from "./formDefinition";

function FormBuilder(props: { formDef: FormDefinition }) {
  const formdef: FormDefinition = props.formDef;

  function renderFormComponents(formdef: FormDefinition, isChild: boolean) {
    return (
      <>
        {formdef.formComponents.map((element) => {
          return (
            <div
              key={`f${formdef.formId}-k${element.key}`}
              id={`form${formdef.formId}-key${element.key}`}
              className={` w-full p-2 rounded-2xl mt-4 ${
                !isChild ? "border-solid border-gray-300 border-2" : ""
              }`}
            >
              {element.children.map((columnChild) => {
                if (FormHelper.isField(columnChild)) {
                  const child = columnChild as Field;
                  return (
                    <div key={`form${formdef.formId}-column${element.key}-child${child.id}`}>
                      <LabelInputContainer>
                        <Label
                          htmlFor={child.id}
                          className=' text-gray-500 font-medium'
                        >
                          {child.label}
                        </Label>
                        <Input
                          id={`f${formdef.formId}-c${element.columnID}-f${child.id}`}
                          placeholder={child.placeHolder}
                          type={child.type}
                        />
                      </LabelInputContainer>
                    </div>
                  );
                } else {
                  const child = columnChild as FormDefinition;
                  return (
                    <div key={''} className='flex'>
                      {renderFormComponents(child, true)}
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </>
    );
  }

  return (
    <form
      id={`form${formdef.formId}`}
      className=' pt-[30px] '
      onSubmit={() => {}}
    >
      {renderFormComponents(formdef, false)}
    </form>
  );
}

export default FormBuilder;
