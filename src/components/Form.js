// OLD FORM //
//          //
// import React, { useState } from "react";

// function Form() {
//   const [formData, setFormData] = useState({
//     firstName: "John",
//     lastName: "Henry",
//   })

//   function handleFirstNameChange(event) {
//     setFormData({
//       ...formData,
//       firstName: event.target.value,
//     })
    
//   }

//   function handleLastNameChange(event) {
//     setFormData({
//       ...formData,
//       lastName: event.target.value,
//     })
//   }

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={formData.firstName} />
//       <input type="text" onChange={handleLastNameChange} value={formData.lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;




// Another way of updating state is by assigning a key that matches they key in your 
// input field, and when you update state with the setFormData function you assign the
// keys/value pair (or pairs) in that function. 

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
      // assign key value here
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

