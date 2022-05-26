import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

const FormValidations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const custumSubmit = (data) => {
    alert('Validacion exitosa');
  };

  // console.log(watch("prueba"));
  const [colorInput, setColorInput] = useState('#fff7f7');

  useEffect(() => {
    const words = watch('prueba');

    if (words === 'react') {
      setColorInput('#614ad3');
    }

  })
  


  return (
    <>
      <h2>Form Validation</h2>
      <form className="form-react" onSubmit={handleSubmit(custumSubmit)}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 5 })}
          />
          {errors.name?.type === "required" && (
            <small className="fail">El campo no puede estar vacio</small>
          )}
          {errors.name?.type === "maxLength" && (
            <small className="fail">
              El campo no puede tener mas de 5 letras
            </small>
          )}
        </div>

        <div className="form-control">
          <label>Edad</label>
          <input
            type="number"
            {...register("age", { required: true, min: 10, max: 100 })}
          />
          {errors.age?.type === "required" && (
            <small className="fail">El campo no puede estar vacio</small>
          )}

          {errors.age?.type === "min" && (
            <small className="fail">La edad minima es de 10 a;os</small>
          )}

          {errors.age?.type === "max" && (
            <small className="fail">La edad maxima es de 100 a;os</small>
          )}
        </div>

        <div className="form-control">
          <label>Pais</label>
          <input
            type="text"
            {...register("country", {
              required: { value: true, message: "Custon message: Ingrese los datos" },
            })}
          />
          {errors.country && (
            <small className="fail">{errors.country.message}</small>
          )}
        </div>

        <div className="form-control">
            <input type="text" {...register('prueba')} style={{backgroundColor:colorInput}}/>
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default FormValidations;
