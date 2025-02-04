import { RouterPath } from 'constants/enums';
import { useNavigate } from 'react-router-dom';

function DefaultErrorPage() {
  const navigate = useNavigate();

  const onHomeClicked = () => {
    navigate(RouterPath.Initial);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-wrap">
      <h1 className="text-2xl font-bold mb-[12px]">Oops!</h1>
      <p>Sorry, an unexpected error has occurred, please try again later.</p>
      <button
        onClick={onHomeClicked}
        className="w-[14rem] mt-[2rem] bg-custom-blue text-white font-bold py-2 px-4 rounded-lg">
        Back to home
      </button>
    </div>
  );
}

export default DefaultErrorPage;
