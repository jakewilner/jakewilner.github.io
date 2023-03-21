import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import combinations from './Combinations';
import MyTable from './Table';

function App() {
  const[adv, setAdv] = useState(false)
  const[numHit, setNumHit] = useState(0)
  const[atk, setAtk] = useState(0)
  const[AC, setAC] = useState(0)

  const[numDamage, setNumDamage] = useState(0)
  const[dice, setDice] = useState(0)
  const[sides, setSides] = useState(0)
  const[bonus, setBonus] = useState(0)

  const[totalDamage, setTotalDamage] = useState(0)
  const[prevDamage, setPrevDamage] = useState(0)

  const[probs, setProbs] = useState([])

  const handleDamage = () => {
    setPrevDamage(totalDamage)
    Damage()
  }

  const handleHit = () => {
    console.log('handle hit')
    Hit()
  }

  function Hit() {
    
    let arr = []
    let probSuccess = (21.0 + parseInt(atk) - parseInt(AC)) / 20.0
    console.log(probSuccess)
    if (adv) {
      probSuccess = 1 - Math.pow(1 - probSuccess, 2)
    }

    if(probSuccess >= 1) {
      arr.push({p : 'All creatures hit', index : numHit})
    } else if(probSuccess <= 0) {

    } else {
      for (let i = 0; i <= numHit; i++) {
        let row = {p : combinations(numHit, i) * Math.pow(probSuccess, i) * Math.pow(1-probSuccess, numHit-i) * 100, index : i}
        arr.push(row)
      }

      for (let i = 1; i < arr.length; i++) {
        arr[i].p = arr[i].p + arr[i-1].p
        arr[i].index = i+1
      }
      arr[0].index += 1
      arr.pop()

      arr.map((row) =>{
        row.p = Math.round(row.p)
      })

      
    }
    setProbs(MyTable(arr))
  }

  function Damage() {
      let temp = 0
      for(let j = 0; j < numDamage; j++) {
          for(let i = 0; i < dice; i++) {
              temp += Math.ceil(Math.random() * sides)
          }
          temp += parseInt(bonus)
      }
      setTotalDamage(temp)
}
  
  return (
    <div className="App">
      <div class="flex-container">
        <div class="flex-child magenta">
          <div className='title'>
            <b>Attack Rolls!</b>
          </div>
          <Form>
            <Form.Group className="hit-0 input-field" controlId="formNum">
              <Form.Label>Number of creatures:</Form.Label>
              <Form.Control type="numInput" placeholder="# of creatures" 
              onChange={(e) => setNumHit(e.target.value)}/>
            </Form.Group>

            <Form.Group className="hit-1 input-field" controlId="formAtk">
              <Form.Label>Attack bonus of each creature:</Form.Label>
              <Form.Control type="AtkBonus" placeholder="Attack bonus" 
              onChange={(e) => setAtk(e.target.value)}/>
            </Form.Group>

            <Form.Group className="hit-2 input-field" controlId="formAC">
              <Form.Label>Defender armor class:</Form.Label>
              <Form.Control type="ACInput" placeholder="Defender AC" 
              onChange={(e) => setAC(e.target.value)}/>
            </Form.Group>

            <Form.Group className="hit-3 input-field" controlId="advCheckbox">
              <Form.Check type="checkbox" label="Advantage" 
              onChange={(e) => setAdv(e.target.checked)}/>
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button variant="dark" onClick={() => handleHit()}>
                Calculate!
              </Button>
            </div>
          </Form>
          <br/>
          <div className="output hit-table">
            {probs}
          </div>
        </div>
        <div class="flex-child green">
          <div className='title'>
              <b>Damage Rolls!</b>
            </div>
            <Form>
              <Form.Group className="dmg-0 input-field" controlId="formNumDmg">
                <Form.Label>Number of creatures:</Form.Label>
                <Form.Control type="numInputDmg" placeholder="# of creatures" 
                onChange={(e) => setNumDamage(e.target.value)}/>
              </Form.Group>

              <Form.Group className="dmg-1 input-field" controlId="formDice">
                <Form.Label>Number of attack dice rolled for each creature:</Form.Label>
                <Form.Control type="diceInput" placeholder="# of dice" 
                onChange={(e) => setDice(e.target.value)}/>
              </Form.Group>

              <Form.Group className="dmg-2 input-field" controlId="formSides">
                <Form.Label>Number of sides per attack die:</Form.Label>
                <Form.Control type="sidesInput" placeholder="# of sides" 
                onChange={(e) => setSides(e.target.value)}/>
              </Form.Group>

              <Form.Group className="dmg-3 input-field" controlId="formBonus">
                <Form.Label>Additional attack damage per creature:</Form.Label>
                <Form.Control type="bonusInput" placeholder="additional damage" 
                onChange={(e) => setBonus(e.target.value)}/>
              </Form.Group>

              <div className='d-grid gap-2'>
                <Button variant="dark" onClick={() => handleDamage()}>
                  Roll!
                </Button>
              </div>
            </Form>
            <br/>
            <div className='output'>
                Your creatures hit for {totalDamage} damage!
            </div>
            <br/>
            <div className='output'>
                Last roll they hit for {prevDamage} damage!
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;