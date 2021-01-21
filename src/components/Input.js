import { useState } from 'react';

function Input() {
  const [fullName, setFullName] = useState('');
  const onChangeHandler = (event) => {
    setFullName(event.target.value);
  }

  return (
    <div>
      <input
        onChange={ onChangeHandler }
        type="text"
        name="fullname"/>
      <p>Họ tên: { fullName }</p>
    </div>
  );
}

export default Input;
