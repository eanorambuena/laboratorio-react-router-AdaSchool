import { Link } from 'react-router-dom'

const Lista = () => {
  return (
    <>
        <h1>Lista</h1>
        <ul>
            <li><Link to="/lovelace">Ada Lovelace</Link></li>
            <li><Link to="/turing">Alan Turing</Link></li>
            <li><Link to="/jobs">Steve Jobs</Link></li>
            <li><Link to="/stallman">Richard Stallman</Link></li>
            <li><Link to="/van-rossum">Guido van Rossum</Link></li>
        </ul>
    </>
  )
}

export default Lista