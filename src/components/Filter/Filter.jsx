export const Filter = ({ handleSetFilterValue }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleSetFilterValue}></input>
    </>
  );
};
