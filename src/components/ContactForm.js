import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input id='name' name='name' className='form-control' type='text' required />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input id='email' name='email' className='form-control' type='email' required />
            </div>
            <div className='mb-3'>
                <label htmlFor='subject' className='form-label'>Subject</label>
                <input id='subject' name='subject' className='form-control' type='text' />
            </div>
            <div className='mb-3'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea id='message' name='message' className='form-control' rows='6' />
            </div>
            <button className='btn btn-success w-100'>Send</button>
        </form>
    );
}

export default ContactForm;