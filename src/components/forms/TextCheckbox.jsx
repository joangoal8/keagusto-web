import "./TextCheckbox.scss"

const TextCheckbox = ({name, onChange, isBlack = true, text}) => {

  return (
      <div>
        <input
            className="form-input-text-checkbox"
            type="checkbox"
            name={name}
            onChange={onChange}
        />
        <span className={isBlack ? "form-input-text-checkbox-info-black"
            : "form-input-text-checkbox-info-white"}>{text}</span>
      </div>
  )
};

export default TextCheckbox;