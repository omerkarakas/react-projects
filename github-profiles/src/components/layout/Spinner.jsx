import spinner from './assets/spinner-x.gif';

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img width={180} src={spinner} className="text-center" alt="Loading..." />
    </div>
  );
}

export default Spinner;
