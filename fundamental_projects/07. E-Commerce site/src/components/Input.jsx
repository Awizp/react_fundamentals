const Input = ({ handleChange, value, color, title, name }) => {
    return (
        <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value={value} name={name} />
            <span className="checkmark" style={{ backgroundColor: color }}></span>
            {title}
        </label>
    )
}

export default Input