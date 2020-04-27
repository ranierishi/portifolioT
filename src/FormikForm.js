import React, {useState} from 'react';
import './Form.css'

export default () => {
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
 
  

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  return (
    <div className="App">
      <div>
        <h1> Contact Me!</h1>
      </div>
      <form onSubmit={handleSubmit} action="/thank-you/">
            <p>
            <h1>Name</h1>
              <label>
                 <input type="text" name="name" value={name} placeholder={'Name'} onChange={handleChange} />
              </label>
            </p>
            <p>
              <h1>Email:</h1>
              <label>
                 <input type="email" name="email" placeholder={'example@email.com'} value={email} onChange={handleChange} />
              </label>
            </p>
            <p>
            <h1>Message:</h1>
              <label>
                 <textarea name="message" value={message} onChange={handleChange} />
              </label>
            </p>
            
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          <h3>{status}</h3>
      </div>
  );
}