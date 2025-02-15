import Field from "../core/Field";
import TextAreaField from "../core/TextAreaField";

function ActionInput ({index, className, register }) {
    return (<div className={className}>
        <Field id={`actionName${index}`}  classNameInput='h-7 w-full rounded-l-md border-r-2 border-black text-black px-2' formHook={register(`actionName${index}`,{})}></Field>
        <TextAreaField id={`actionDescription${index}`}placeholder=' ' classNameInput='h-7 resize-none outline-none w-full rounded-none px-2 overflow-hidden text-black rounded-r-md' formHook={register(`actionDescription${index}`,{})}></TextAreaField>

        </div>
    )
}

export default ActionInput