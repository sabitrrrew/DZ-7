import React from "react";
import { useForm } from 'react-hook-form';

function RegistrationForm(){
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Фамилия:</label>
        <input{...register('surname')}/>
      </div>
      <div>
      <label>Имя:</label>
      <input{...register('name')}/>
    </div>
      <div>
      <label>Отчество:</label>
      <input{...register('patronymic')}/>
    </div>
      <div>
      <label>Гол рождения:</label>
      <input type={"number"} {...register('surname')}/>
    </div>
      <div>
      <label>Номер телефона:</label>
      <input type="tel" {...register('PhoneNumber')}/>
    </div>
      <div>
      <label>Email:</label>
      <input type="email" {...register('email')}/>
    </div>
    <button type={"submit"}>Зарегистрироваться</button>

    </form>
      );
}

    export default RegistrationForm;