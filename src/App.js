import { people } from './data.js'; 
import { getImageUrl } from './utils.js';

export default function List() {
  // Não filtrar as pessoas, exibir todas
  const listItems = people.map(person => 
    <li key={person.id}> {/* Adicionei a key aqui para evitar warnings */}
      <img 
        src={getImageUrl(person)} 
        alt={person.name} 
        onError={(e) => e.target.src = 'default-image.jpg'} // Isso pode ser útil caso a imagem falhe
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return <ul>{listItems}</ul>;
}
