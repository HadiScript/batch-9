
const Inputs = ({
  item,
  changeHandler,
  addItem,
}) => {
  return (
    <div className="row ">
      <form onSubmit={addItem}>
        <input
          placeholder='Enter Your Item'
          className='rounded-3 p-2 mt-3 addInput col-10'
          value={item}
          onChange={changeHandler}
        />
        <button className="col-2 p-2 btn btn-link text-decoration-none" onClick={addItem}>Add item</button>
      </form>

    </div>
  )
}

export default Inputs