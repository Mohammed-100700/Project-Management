import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-slate-600 bg-slate-400 text-white focus:outline-none focus:border-slate-300";
  return (
    <div>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase" htmlFor="">
          {label}
        </label>
        {textarea ? (
          <textarea ref={ref} {...props} className={classes} />
        ) : (
          <input ref={ref} {...props} className={classes} type="text" />
        )}
      </p>
    </div>
  );
});

export default Input;
