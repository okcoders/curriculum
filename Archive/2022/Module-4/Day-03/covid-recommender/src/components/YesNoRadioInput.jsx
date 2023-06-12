export default function YesNoRadioInput({
  labelText = '',
  name,
  handleChange,
}) {
  return (
    <fieldset>
      <legend style={{ paddingRight: 10 }}>{labelText + ': '}</legend>
      <br />
      {/* Yes option */}
      <label htmlFor={`yes-${name}`}>Yes</label>
      <input
        id={`yes-${name}`}
        type="radio"
        name={name}
        onChange={handleChange}
        value="yes"
      />
      {/* No Option */}
      <label htmlFor={`no-${name}`}>No</label>
      <input
        id={`no-${name}`}
        type="radio"
        name={name}
        onChange={handleChange}
        value="no"
      />
      <br />
      <br />
    </fieldset>
  );
}
