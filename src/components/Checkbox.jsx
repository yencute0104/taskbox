import React from 'react';

export default function Checkbox({ label, checked }) {
  return (
    <>
      <input type='checkbox' id={label} checked={checked} />
      <span style={{ color: 'white' }}>{label}</span>
    </>
  );
}
