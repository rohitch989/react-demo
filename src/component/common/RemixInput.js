function RemixInput({ id, name, type, onChange, value, errors }) {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className="form-control">
      <label htmlFor={id}>{name}:</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
      {errors ? <em className="text-red-600">{errors}</em> : null}
    </div>
  );
}

export default RemixInput;
