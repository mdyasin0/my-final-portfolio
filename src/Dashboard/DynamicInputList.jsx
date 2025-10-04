import React, { useContext } from "react";
import { ColorContext } from "../Color/ColorContext";

const DynamicInputList = ({ label, values, setValues }) => {
  const { colors } = useContext(ColorContext); // Color context

  const handleChange = (index, newValue) => {
    const updated = [...values];
    updated[index] = newValue;
    setValues(updated);
  };

  const addField = () => {
    setValues([...values, ""]);
  };

  const removeField = (index) => {
    const updated = values.filter((_, i) => i !== index);
    setValues(updated);
  };

  return (
    <div className="mb-4">
      <label
        className="block font-bold mb-2"
        style={{ color: colors.text }}
      >
        {label}
      </label>

      {values.map((val, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            type="text"
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            className="border p-2 rounded w-full"
            style={{
              borderColor: colors.primary,
              backgroundColor: colors.background,
              color: colors.text,
            }}
          />
          {values.length > 1 && (
            <button
              type="button"
              onClick={() => removeField(i)}
              className="px-2 rounded"
              style={{
                backgroundColor: colors.background,
                color: colors.text,
              }}
            >
              X
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addField}
        className="px-3 py-1 rounded"
        style={{
          backgroundColor: colors.accent,
          color: colors.background,
        }}
      >
        + Add More
      </button>
    </div>
  );
};

export default DynamicInputList;
