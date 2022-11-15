const CreateWord: React.FC = () => {
  return (
    <div className='flex flex-col justify-between'>
      <h2 className='pr-1 text-lg font-semibold'>שלחו מילה לחברים</h2>
      <button className='rounded-md bg-blue-800 px-5 py-[6px] text-lg font-medium text-white hover:bg-blue-900'>
        צרו מילה
      </button>
    </div>
  );
};

export default CreateWord;
