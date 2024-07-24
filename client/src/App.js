import {useState} from 'react';

function App() {
  const [form, setform] = useState({
    amount: 0,
    description: "",
    date: '',
  })

  async function handleSubmit(e){
    e.preventDefault();
    console.log(form);
    const res = await fetch('http://localhost:4000/transaction', {
      method: "POST",
      body: form,
    })

    console.log(res);
  }

function handleInput(e){
  //console.log(e.target.value)
  setform({
    ...form,
    [e.target.name]:e.target.value,
  })
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="amount" type="number" onChange={handleInput} value={form.amount} placeholder="Enter Transaction Amount" />
        <input name="description" type="text" placeholder="Enter Transaction Details" onChange={handleInput} value={form.description} />
        <input name="date" type="date" onChange={handleInput} value={form.date} />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;