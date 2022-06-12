import Button from './Button';

//rafc
const Header = ({ title,  onAdd, showAdd }) => {


  return (
    <header className="header">
      {/* <h1 style={headingStyle}>Task Tracker {title}</h1> */}
      <h1>{title}</h1>
      <Button color={showAdd?"red":"green"} text={showAdd?"Hide":"Add"} onClick={onAdd}/>
    </header>
  )
}

//Header.defaultProps = { title: 'lelebe'};

// Header.propTypes = {
//   title: PropTypes.string.isRequired
// }

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "yellow"
// }


export default Header


