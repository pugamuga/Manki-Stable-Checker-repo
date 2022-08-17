const formSubmit = (event) => {
  event.preventDefault();
  const userName = event.target.usernameEv.value;
  const data = {
    username: userName,
  };
  console.log(data);
};

const Input = () => {
  return (
    <div className="onImage">
      <form onSubmit={formSubmit}>
        <label>
          ETH address:
          <input type="text" name="usernameEv" placeholder="0x0000000000000000000"/>
        </label>

        <div>
          <button type="submit" style={{ margin: 55 }}>
            Result
          </button>
        </div>
        <div style={{ margin: 15 }}>Output</div>
      </form>
    </div>
  );
};

export default Input;
