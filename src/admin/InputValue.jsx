export default function Input({title,onChange,forwardRef,place,value,...props}){
    return(
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            {title}
        </label>
        <input  value={value ? value : undefined} {...props} onChange={onChange} ref={forwardRef} className="appearance-none z-10 block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  placeholder={place}/>
        </div>
    )
} 