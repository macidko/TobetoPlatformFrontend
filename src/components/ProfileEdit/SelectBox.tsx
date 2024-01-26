import { Field } from 'formik'
import React from 'react'

type Props = {
    defaultText: string;
    selectBoxArray: {id: number, name: any, selectBoxArray: any}[];
    // selectBoxSubArrayName: string;
    // selectBoxSubArray?: {id: number}[];
}

const SelectBox = (props: Props) => {
    return (
        <Field
            as="select"
            name="language"
            className="custom-field form-select haha"
        >
            <option value="" selected disabled>
                {props.defaultText}
            </option>
            {props.selectBoxArray.map((element: any) => (
                <option key={element.id} value={element.id}>
                    {element.name || element.selectBoxArray}
                </option>
            ))}
        </Field>)
}

export default SelectBox