import {useState} from 'react';

function Contact() {

    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [sent, setSent] = useState(false);

    function handleChange(e){
        setForm({...form,[e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!form.name || !form.email || !form.message) return;
        setSent(true);
        setForm({name: "", email: "", message: ""});
    }

    return(
        <>
            <section className='max-w-xl mx-auto px-4 py-8 space-y-4 page-section'>
                <h1 className='text-2xl font-bold text-green-800'>Contact</h1>
                {sent &&(
                    <div className='rounded-md border border-green-300 bg-green-50 px-3 py-2 text-green-800'>
                        Message sent successfully!
                    </div>
                )}
                <form className='space-y-3' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder='Your Name'
                        value ={form.name}
                        onChange={handleChange}
                        className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Your Email'
                            value ={form.email}
                            onChange={handleChange}
                            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder='Message'
                            value ={form.message}
                            onChange={handleChange}
                            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                        ></textarea>    
                        <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors' type='submit'>
                            Send
                        </button>
                </form>     
            </section>
        </>
    );
}
export default Contact;