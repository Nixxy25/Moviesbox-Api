
const SearchField = ({placeHolder, onChange}) => {
    return (
      <div className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
          <input
              className="w-full outline-none focus:outline-none"
              placeholder={placeHolder}
              onChange={onChange}
          />
      </div>
    )
  }
  
  export default SearchField;