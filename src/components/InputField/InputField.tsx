import './InputField.css';

interface InputFieldProps {
  text: string,
  handleInput: (str: string) => void,
  handleSubmit: () => void,
}

const InputField: React.FC<InputFieldProps> = ({text, handleInput, handleSubmit}) => {
  return (
    <label className="input-wrapper">
        <input className="input" value={text} onChange={(e) => handleInput(e.target.value)} />
        <button className="add-button" onClick={handleSubmit}>Add Todo</button>
      </label>
  )
};

export default InputField
