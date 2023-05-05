import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form"

interface IInputLoginProps extends InputHTMLAttributes<HTMLInputElement>{
    error?: FieldError;
    label : string;
}

export const InputLogin = forwardRef(
    ({label, error, ...rest}: IInputLoginProps, ref: ForwardedRef<HTMLInputElement>) => (
        <div>
            {label ? <label>{label}</label> :null}
            <input ref={ref} {...rest}/>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
)

export default InputLogin