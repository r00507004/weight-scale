import React from "react";
import { useForm } from 'react-hook-form';
import * as config from '../config';

type FormValues = {
  email: string;
};

const Form: React.FC = () => {
  const [message, setMessage] = React.useState('');
  const { register, handleSubmit } = useForm<FormValues>();
  
  const onSubmit = async (input: FormValues) => {
    fetch(config.hubspot.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ fields: [{ name: "email", value: input.email }], }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      setMessage("登録ありがとうございました。");
    }).catch(() => {
      setMessage("登録に失敗しました。");
    });
  };

  return (
    <div id="form" className="flex flex-col justify-center items-center mx-2 mt-32 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-lg font-bold">メールアドレスを登録</div>
      <div className="text-base mt-4">メールアドレスをご登録頂いた方に、最新情報をお届けします。</div>
      {
        message ? (
          <div className="flex flex-col justify-center items-center">
            <div className="mt-4 px-4 py-2 border border-transparent text-base text-pink-400  font-bold">{ message }</div>
            <button onClick={() => setMessage('')} className="mt-4 px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400">もう一度登録する</button>
          </div>
        ):(
          <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="max-w-[384px] w-full mt-4 px-4 py-2 border text-base"
              type="email"
              {...register("email")}
              placeholder="メールアドレス入力"
              required
            />
            <button id="ctaButtonSubmit" type="submit" className="mt-4 px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400">無料先行登録</button>
          </form>
        )
      }
      
    </div>
  );
};

export default Form;