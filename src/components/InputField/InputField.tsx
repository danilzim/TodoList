import './InputField.css';

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <label className="input-wrapper">
        <input className="input" value={text} onChange={(e) => handleInput(e.target.value)} />
        <button className="add-button" onClick={handleSubmit}>Add Todo</button>
      </label>
  )
};

export default InputField
