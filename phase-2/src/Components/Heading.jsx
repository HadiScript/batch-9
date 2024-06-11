

const Heading = ({ title, icon }) => {
  return (
    <div className="d-flex align-items-center gap-2 heading">
      <span >{title}</span> {icon}
    </div>
  )
}
export default Heading