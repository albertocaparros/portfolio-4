import { useState } from 'preact/hooks';

const CounterDemo = () => {
  const [count, setCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);

  const handleClick = () => {
    setCount((c) => c + 1);
    setLastUpdated('count'); // Highlight the change
    setTimeout(() => setLastUpdated(null), 500); // Clear highlight after 500ms
  };

  return (
    <div 
      style={{
        border: '1px solid #4a5568',
        borderRadius: '8px',
        padding: '1.5rem',
        backgroundColor: '#2d3748',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
        maxWidth: '600px', 
        margin: 'auto', 
      }}
      className={"not-prose"}
    >
      <h2 style={{ color: '#e2e8f0' }}>Virtual DOM Demo</h2>
      <p>
        Count: <span 
          style={{
            backgroundColor: lastUpdated === 'count' ? '#d69e2e' : 'transparent', 
            padding: '0.2rem 0.4rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease',
          }}
        >{count}</span>
      </p>

      <button 
        onClick={handleClick}
        style={{
          backgroundColor: '#4a90e2', 
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.2s ease',
          alignSelf: 'center'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#357abd'} 
        onFocus={(e) => e.currentTarget.style.backgroundColor = '#357abd'} 
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
        onBlur={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
      >Increment</button>
      <p style={{ 
        fontSize: '0.875rem', 
        color: '#a0aec0', 
        marginTop: '0.8rem' 
      }}>
        When we click, only the count updates. Thanks Virtual DOM!
      </p>
    </div>
  );
};

export default CounterDemo;