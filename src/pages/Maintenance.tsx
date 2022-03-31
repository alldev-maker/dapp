import { useState } from 'react';
import { ReactComponent as IconAvatar } from 'assets/logos/progressAvatar.svg';
import { InputField } from 'components/inputField/InputField';
export const Maintenance = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black text-center">
      <div className="inline-block">
        <IconAvatar />
      </div>
      <h1 className="top-0">The Service is under development</h1>
      <p className="top-[40px]">
        Unfortunately we are under development, but you can leave your mail and
        we will contact you as soon as the work is completed.
      </p>
      <form className="relative">
        <InputField
          input={email}
          setInput={setEmail}
          placeholder="Enter your email"
        />
        <button className="btn-primary rounded  absolute top-0">
          request a demo
        </button>
      </form>
    </div>
  );
};
