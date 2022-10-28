import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function BootstrapTablet({table}) {
    const theme = useSelector((state) => state.theme)

    const headerKeys = Object.keys(Object.assign({}, ...table));
  return (
    <Table striped bordered hover size="sm" variant={`${theme === 'dark' ? 'dark' : ''}`}>
      <thead>
        <tr>
        {
          headerKeys.map((ele, i) => (
              <th key={i}>
                  {ele}
              </th>
          ))
        }
        </tr>
      </thead>
      <tbody>
        {table.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BootstrapTablet;