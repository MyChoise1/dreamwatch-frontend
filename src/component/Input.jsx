// eslint-disable-next-line react/prop-types
export default function Input({ label, type, ...props }) {
    return (
        <section>
            <input type={type} name={label} placeholder={label} {...props} 
            className="bg-gray-200 px-[6vh] py-1 my-2 rounded font-semibold text-slate-500" />
        </section>
    )
}