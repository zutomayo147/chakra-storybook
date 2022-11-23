import './button.css';

function Button({ children, color = 'default', size = 'base', onClick }) {
  return (
    <button className={`${color} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
