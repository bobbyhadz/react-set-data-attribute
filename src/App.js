import './App.css';

export default function App() {
  const handleClick = event => {
    console.log(event.target.dataset);

    // 👇️ "my-btn"
    console.log(event.target.getAttribute('data-test-id'));

    // 👇️ set attribute
    event.target.setAttribute('data-foo', 'bar');
    console.log(event.target.getAttribute('data-foo')); // 👉️ bar

    event.target.setAttribute('data-foo', 'baz');
    console.log(event.target.getAttribute('data-foo')); // 👉️ baz
  };

  return (
    <div>
      {/* 👇️ set data-test-id attribute */}
      <button onClick={handleClick} data-test-id="my-btn">
        Click
      </button>
    </div>
  );
}
