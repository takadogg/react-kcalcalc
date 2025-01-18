export const InputValue = (props) => {
    const { valueName, placeholder, inputValue, updateValue } = props;
    return (
        <label className="pl-5">
            {valueName}:
            <input 
                placeholder={placeholder} 
                value={inputValue} 
                onChange={(e) => updateValue(e.target.value)}
                className="input-Value"
            />
            g
        </label>
    );
};
