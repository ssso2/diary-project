export function LoginInput({
    name,
    id,
    type,
    value,
    placeholder,
    onchange,
    readOnly,
}) {
    return (
        <div className="mt-4">
            <label htmlFor={id} className="text-gray4">
                {/* mt-4 */}
                {name}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                className="border-[#c4c4c4] rounded-lg py-3 pl-5 w-full text-black"
                required
                readOnly={readOnly}
            />
        </div>
    );
}
