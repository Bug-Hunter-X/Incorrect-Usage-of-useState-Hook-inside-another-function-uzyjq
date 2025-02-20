```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered with count:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // Correct usage of setCount
    const correctIncrement = () => {
       setCount(prevCount => prevCount + 1); 
    };
    correctIncrement();
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```