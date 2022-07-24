import "./TextCheckbox.scss"

const TextCheckbox = ({name, onChange, text}) => {

  return (
      <div>
        <input
            className="form-input-text-checkbox"
            type="checkbox"
            name={name}
            onChange={onChange}
        />
        <span className="form-input-text-checkbox-info">{text}</span>
      </div>
  )
};

export default TextCheckbox;