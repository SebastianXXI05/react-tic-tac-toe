import {useState, useEffect} from 'react'
import Box from './Box'

function App() {

  const [box, setBox] = useState(new Array(9).fill(''))
  const [turn, setTurn] = useState(true)
  const [finish, setFinish] = useState(false)

  const handleLetter = (pos, letter) => {
    if (!finish) {
      const newBox = box.map((e, i) => {
        //e.length !== 0 ? setTurn(!turn) : null
        return e.length !== 0 ? e : pos == i ? letter : e
      })
      setTurn(!turn)
      setBox(newBox)
    }
    else {
      return null
    }
  }

  const whoWin = () => {
    let num = 0
    box.map(e => e.length !== 0 ? num++ : null)
    // Win X

    // horizontal 
    if (box[0] === 'X' && box[1] === 'X' && box[2] === 'X') {
      setFinish(!finish)
    }
    else if (box[3] === 'X' && box[4] === 'X' && box[5] === 'X') {
      setFinish(!finish)
    }
    else if (box[6] === 'X' && box[7] === 'X' && box[8] === 'X') {
      setFinish(!finish)
    }
    // vertical

    else if (box[0] === 'X' && box[3] === 'X' && box[6] === 'X') {
      setFinish(!finish)
    }
    else if (box[1] === 'X' && box[4] === 'X' && box[7] === 'X') {
      setFinish(!finish)
    }
    else if (box[2] === 'X' && box[5] === 'X' && box[8] === 'X') {
      setFinish(!finish)
    }

    // Diagonal 
    else if (box[0] === 'X' && box[4] === 'X' && box[8] === 'X') {
      setFinish(!finish)
    }
    else if (box[2] === 'X' && box[4] === 'X' && box[6] === 'X') {
      setFinish(!finish)
    }
    
    // Win O

    // horizontal 
    else if (box[0] === 'O' && box[1] === 'O' && box[2] === 'O') {
      setFinish(!finish)
    }
    else if (box[3] === 'O' && box[4] === 'O' && box[5] === 'O') {
      setFinish(!finish)
    }
    else if (box[6] === 'O' && box[7] === 'O' && box[8] === 'O') {
      setFinish(!finish)
    }
    // vertical

    else if (box[0] === 'O' && box[3] === 'O' && box[6] === 'O') {
      setFinish(!finish)
    }
    else if (box[1] === 'O' && box[4] === 'O' && box[7] === 'O') {
      setFinish(!finish)
    }
    else if (box[2] === 'O' && box[5] === 'O' && box[8] === 'O') {
      setFinish(!finish)
    }

    // Diagonal 
    else if (box[0] === 'O' && box[4] === 'O' && box[8] === 'O') {
      setFinish(!finish)
    }
    else if (box[2] === 'O' && box[4] === 'O' && box[6] === 'O') {
      setFinish(!finish)
    }
    //draw

    else if (num === 9) {
      setFinish(!finish)
      setTurn('draw')
    }
    else {
      null
    }
  }

  useEffect(() => {
    whoWin()
  }, [box])

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h2>Turno: {turn ? 'X' : 'O'}</h2>
      <div className='main'>
        {box.map((e, i) => <Box letter={turn ? 'X' : 'O'} handle={handleLetter} pos={i} key={i} text={e} />)}
      </div>
      {
        finish ? (
          <div>
            {turn === 'draw' ? <h3>Empate</h3> : turn ? <h3>Gana: O</h3> : <h3>Gana: X</h3>}
            <button
              onClick={() => {
                setBox(new Array(9).fill(''))
                setTurn(true)
                setFinish(false)
              }}
            >
              Volver a Jugar
            </button>
          </div>
        ): null
      }
    </div>
  )
}

export default App
