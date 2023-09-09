import { FaTrashAlt } from 'react-icons/fa';

const Content = ({
  items,
  handleCheck,
  handleDelete
}) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item, index) => (
            <li key={item.id} className="item">
              <input 
                type="checkbox" 
                checked={item.checked} 
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >{item.item}</label>
              <FaTrashAlt 
                role="button" 
                tabIndex="0" 
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  )
}

export default Content
