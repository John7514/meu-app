import React, { useState } from 'react';

function Toolbar() {
  return (
    <div>
      <button>Play Movie</button>
      <button>Upload Image</button>
    </div>
  );
}

function Gallery() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const handleShowDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div>
      <h2>Homenaje a la Neurocirugía by Marta Colvin Andrade</h2>
      <p>Item 1 of 12</p>
      <button onClick={handleShowDetails}>Show details</button>
      {detailsVisible && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Homenaje_a_la_Neurocirug%C3%ADa%2C_Instituto_de_Neurocirug%C3%ADa%2C_Providencia%2C_Santiago_20200106_02.jpg/800px-Homenaje_a_la_Neurocirug%C3%ADa%2C_Instituto_de_Neurocirug%C3%ADa%2C_Providencia%2C_Santiago_20200106_02.jpg"
          alt="Sculpture"
          style={{ width: '300px' }}
        />
      )}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 3)}>+3</button>
    </div>
  );
}

function Form() {
  return (
    <form>
      <label>
        To:
        <select>
          <option>Bob</option>
        </select>
      </label>
      <textarea placeholder="Hello"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh', border: '1px solid black' }}>
      <p>The dot is at ({position.x}, {position.y})</p>
    </div>
  );
}

function Form2() {
  const [firstName, setFirstName] = useState('Barbara');
  const [lastName, setLastName] = useState('Hepworth');
  const [email, setEmail] = useState('bhepworth@sculpture.com');

  return (
    <div>
      <h2>Form2</h2>
      <form>
        <label>First name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>Last name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </form>
      <p>{firstName} {lastName} ({email})</p>
    </div>
  );
}

function Form3() {
  const [name, setName] = useState('Niki de Saint Phalle');
  const [title, setTitle] = useState('Blue Nana');
  const [city, setCity] = useState('Hamburg');
  const [imageUrl, setImageUrl] = useState('https://live.staticflickr.com/173/450499810_7bf1d8f3d9_w.jpg');

  return (
    <div>
      <h2>Form3</h2>
      <form>
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>Image:
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
      </form>
      <p>{title} by {name} (located in {city})</p>
      <img src={imageUrl} alt={title} style={{ width: '200px' }} />
    </div>
  );
}

function List() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <h2>List</h2>
      <p>Inspiring sculptors:</p>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function List2() {
  const [items, setItems] = useState([
    'Marta Colvin Andrade',
    'Lamidi Olonade Fakeye',
    'Louise Nevelson'
  ]);

  const handleDelete = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h2>List2</h2>
      <p>Inspiring sculptors:</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShapeEditor() {
  return (
    <div>
      <p>ShapeEditor</p>
      {/* Adicione qualquer funcionalidade específica aqui */}
    </div>
  );
}

function CounterList() {
  const [counts, setCounts] = useState([0, 0, 0]);

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  return (
    <div>
      <h2>CounterList</h2>
      <ul>
        {counts.map((count, index) => (
          <li key={index}>
            {count} <button onClick={() => handleIncrement(index)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function List3() {
  return (
    <div>
      <h2>Inspiring sculptors:</h2>
      <ul>
        <li>Marta Colvin Andrade</li>
        <li>Teta</li>
        <li>Lamidi Olonade Fakeye</li>
        <li>Louise Nevelson</li>
      </ul>
    </div>
  );
}

function List4() {
  return (
    <div>
      <h2>Reverse</h2>
      <ul>
        <li>Big Bellies</li>
        <li>Lunar Landscape</li>
        <li>Terracotta Army</li>
      </ul>
    </div>
  );
}

function BucketList() {
    const artList = ['Big Bellies', 'Lunar Landscape', 'Terracotta Army'];
  
    return (
      <div>
        <h2>Art Bucket List</h2>
        <div>
          <h3>My list of art to see:</h3>
          <ul>
            {artList.map((art, index) => (
              <li key={index}>
                <input type="checkbox" id={`myArt${index}`} name={`myArt${index}`} value={art} />
                <label htmlFor={`myArt${index}`}>{art}</label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Your list of art to see:</h3>
          <ul>
            {artList.map((art, index) => (
              <li key={index}>
                <input type="checkbox" id={`yourArt${index}`} name={`yourArt${index}`} value={art} />
                <label htmlFor={`yourArt${index}`}>{art}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  

function App2() {
  return (
    <div>
      <h1>Atividade:</h1>
      <p>Implementar os componentes do tutorial em suas versões finais:</p>
      <Toolbar />
      <Gallery />
      <Counter />
      <Form />
      <MovingDot />
      <Form2 />
      <Form3 />
      <List />
      <List2 />
      <ShapeEditor />
      <CounterList />
      <List3 />
      <List4 />
      <BucketList />
    </div>
  );
}

export default App2;
