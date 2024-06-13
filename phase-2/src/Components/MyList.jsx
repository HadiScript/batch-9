import { MdOutlineDeleteOutline } from "react-icons/md";
import Heading from "./Heading";
import { BiEdit } from "react-icons/bi";




const MyList = ({ list, deleteAnItem, theme, updateItem }) => {
  return (
    <div className="mt-2">
      <Heading />

      <div className='d-flex flex-column'>
        {
          list.length > 0 ?
            <div className="table-responsive">
              <table className={`table table-${theme}`}>
                <caption>List of users</caption>
                <thead>
                  <tr >
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Completed</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    list.map((x, index) => <tr key={index}>
                      <th scope="row"> {++index} </th>
                      <td>{x.name}</td>
                      <td>NO</td>
                      <td><MdOutlineDeleteOutline size={20} onClick={() => deleteAnItem(x.id)} role="button" /></td>
                      <td><BiEdit onClick={() => updateItem(x.id)} size={20} role="button" /></td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
            : <span>Empty List</span>
        }
      </div>
    </div>
  )
}
export default MyList