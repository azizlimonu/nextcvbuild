import style from '../../styles/TextArea.module.css'

const TextArea = ({ name, placeholder, value, onChange, maxLength }) => {
  return (
    <textarea
      className={style.textarea}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default TextArea;
