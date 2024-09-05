'use client';
import { useState } from 'react';
import Link from 'next/link'
import emailjs from 'emailjs-com';

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Complete name is required.';
    if (!formData.message) formErrors.message = 'Message is required.';
    if (!formData.email) {
      formErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid.';
    }
    if (!formData.agree) {
      formErrors.agree = 'You must agree to the terms & conditions and privacy policy.';
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      emailjs
        .send(
          'service_e3j4b2l',
          'template_qzpbhca',
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          'U9j3EnuZPJPEjbg6d'
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Your message has been sent successfully!');
            setFormData({
              name: '',
              email: '',
              message: '',
              agree: false
            });
          },
          (error) => {
            console.log(error.text);
            alert('An error occurred. Please try again.');
          }
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        <div className='md:col-span-2 col-span-1 space-y-1 mb-4'>
          <h3>Let's chat!</h3>
          <p>Please complete this form to discuss your concerns in detail.</p>
        </div>
        {/* Complete Name */}
        <div className='col-span-1'>
          <label className="block">
            Complete Name <span className='text-red-500'>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={'Juan Dela Cruz'}
            className={`mt-1.5 block w-full py-2 px-3.5 md:text-sm text-xs bg-stone-900/50 placeholder:text-stone-600 text-stone-200 transition duration-300 ease-in-out border rounded-md focus:ring-1 focus:ring-stone-300 focus:border-stone-300 ${errors.name ? 'border-red-500' : 'border-stone-800/50'
              }`}
          />
          {errors.name && <p className="text-red-500 md:text-sm text-xs mt-1">{errors.name}</p>}
        </div>
        {/* Email Address */}
        <div className='col-span-1'>
          <label className="block">
            Email Address <span className='text-red-500'>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={'juan.delacruz@gmail.com'}
            className={`mt-1.5 block w-full py-2 px-3.5 md:text-sm text-xs bg-stone-900/50 placeholder:text-stone-600 text-stone-200 transition duration-300 ease-in-out border rounded-md focus:ring-1 focus:ring-stone-300 focus:border-stone-300 ${errors.email ? 'border-red-500' : 'border-stone-800/50'
              }`}
          />
          {errors.email && <p className="text-red-500 md:text-sm text-xs mt-1">{errors.email}</p>}
        </div>
        {/* Message for Customization */}
        <div className='md:col-span-2 col-span-1'>
          <label className="block">
            Message <span className='text-red-500'>*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={"(I'd like to request a custom website.)"}
            className={`mt-1.5 block w-full py-2 px-3.5 md:text-sm text-xs bg-stone-900/50 placeholder:text-stone-600 text-stone-200 transition duration-300 ease-in-out border rounded-md focus:ring-1 focus:ring-stone-300 focus:border-stone-300 ${errors.message ? 'border-red-500' : 'border-stone-800/50'
              }`}
          />
          {errors.message && <p className="text-red-500 md:text-sm text-xs mt-1">{errors.message}</p>}
        </div>
        {/* Checkbox for agreement */}
        <div className="md:col-span-2 col-span-1">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className={`mr-3.5 rounded-[4px] focus:ring-stone-800 focus:ring-2 text-stone-800 bg-stone-900/50 border border-stone-800/50 transition duration-300 ease-in-out ${errors.agree ? 'border-red-500' : 'border-stone-800/50'
                }`}
            />
            <p className='md:leading-none leading-snug'>Do you agree to the <Link href='/' className='underline text-stone-300'>terms & conditions</Link> and <Link href='/' className='underline text-stone-300'>privacy policy</Link>?</p>
          </label>
          {errors.agree && <p className="text-red-500 md:text-sm text-xs mt-1">{errors.agree}</p>}
        </div>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-stone-200 hover:bg-stone-300 text-stone-950 font-semibold py-2 px-4 rounded-md md:text-sm text-xs transition duration-300 ease-in-out active:scale-95 md:w-auto w-full"
      >
        Submit inquiry
      </button>
      {/* Note */}
      <div className='p-4 border border-stone-800/30 rounded-lg bg-stone-900/20'>
        <p><span className='text-stone-300'>Note:</span> After you submit this form, I'll reach out to you via email to discuss your inquiry or concern in more detail. I'll make sure to get back to you as soon as possible, so we can start addressing your needs right away!</p>
      </div>
    </form>
  )

}