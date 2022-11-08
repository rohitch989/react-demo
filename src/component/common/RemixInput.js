function RemixInput({ id, name, type, onChange, value, error, max, min }) {




  return type === 'dropdown' ?
    <div className="form-control">
      <label htmlFor={id}>Gender:</label>
      <select id={id} name={name} onChange={(e) => onChange(e)}>
        {value.map((v, index) => <option value={v} key={index} hidden={!v}>{v ? v.toUpperCase() : "Select"}</option>)}
      </select>
      {error?.gender ? <em className="text-red-600">{error.gender}</em> : null}
    </div> : (
      <div className="form-control">
        <label htmlFor={id}>{name}:</label>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={(e) => onChange(e)}
          max={max ? max : null}
          min={min ? min : null}
          required
        />
        {error ? <em className="text-red-600">{error}</em> : null}
      </div>
    );
}

export default RemixInput;
