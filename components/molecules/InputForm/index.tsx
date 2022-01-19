interface InputFormProps {
    title: string;
    name: string;
    placeholder: string;
}
export default function InputForm(props: InputFormProps) {
  const { title, name, placeholder } = props;
  return (
    <div className="pb-50">
      <label htmlFor={name} className="form-label text-lg fw-medium color-palette-1 mb-10">
        {title}
      </label>

      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={name}
        name={name}
        aria-describedby={name}
        placeholder={placeholder}
      />
    </div>
  );
}
