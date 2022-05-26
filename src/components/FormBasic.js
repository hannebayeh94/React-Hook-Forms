import React from "react";
import { useForm } from "react-hook-form";

const FormBasic = () => {
  const { register, handleSubmit } = useForm();


  const custumSubmit = (data) => {

    console.log(data);

  }

  return (
    <>
      <h2>Form Basic</h2>
      <form className="form-react" onSubmit={handleSubmit(custumSubmit)}>
        <div className="form-control">
          <label >Name</label>
          <input type="text" {...register('name')}/>
        </div>

        <div className="form-control">
          <label>Edad</label>
          <input type="number" {...register('age')}/>
        </div>

        <div className="form-control">
          <label >Pais</label>
          <input type="text" {...register('country')}/>
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default FormBasic;
