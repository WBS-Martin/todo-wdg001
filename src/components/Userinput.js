const Userinput = ({ handleUserInput, handleSubmit, input }) => {
  return (
    <form>
      <input
        type='text'
        placeholder='task'
        value={input}
        onChange={handleUserInput}
      />
      <input type='submit' onClick={handleSubmit} />
    </form>
  )
}

export default Userinput
