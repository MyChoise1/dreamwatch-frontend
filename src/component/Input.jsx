// eslint-disable-next-line react/prop-types
export default function Input({ label, type, ...props }) {
    return (
        <section>
            <label htmlFor={label}>{label}</label>
            <input type={type} name={label} {...props} />
        </section>
    )
}