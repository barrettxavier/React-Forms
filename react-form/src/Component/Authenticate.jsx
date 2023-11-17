const Authenticate = ({token}) => {

  const handleclick = async () => {
    console.log(`authenticate`)
  }

  return (
  <>
  <h2>Authenticate</h2>
  <button type="submit" onClick={handleclick}>Authenticate Token</button>
  </>
  )
}

export default Authenticate