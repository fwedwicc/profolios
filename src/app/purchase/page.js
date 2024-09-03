'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import emailjs from 'emailjs-com';
import useLenis from '../hooks/useLenis';

export default function Purchase() {
  useLenis()
  const searchParams = useSearchParams();
  const image = searchParams.get('image');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

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
          'template_csx77pr',
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            itemTitle: title,
            itemPrice: price,
            itemDescription: description,
          },
          'U9j3EnuZPJPEjbg6d'
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Your message has been sent successfully!');
          },
          (error) => {
            console.log(error.text);
            alert('An error occurred. Please try again.');
          }
        );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='p-12 px-36 pt-44'
    >
      <div className='grid grid-cols-2 gap-12'>
        {/* Left Content */}
        <div className='space-y-4'>
          <div className="relative h-[25rem]">
            {image && <img src={image} alt={title} className="absolute object-cover w-full h-full rounded-lg" />}
          </div>
          <div className='space-y-5'>
            <div className='flex justify-between items-center'>
              <h2 className="leading-none text-2xl font-bold">{title}</h2>
              <p>{price}</p>
            </div>
            <p>{description}</p>
          </div>
        </div>
        {/* Right Content */}
        <form onSubmit={handleSubmit} className="self-start space-y-6">
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2'>
              <h3>Purchase Request</h3>
              <p>Kindly fill out this form so we can handle your purchase request.</p>
            </div>
            <div className='col-span-1'>
              <label className="block">
                Complete Name <span className='text-red-500'>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 bg-stone-900/50 border rounded-md ${errors.name ? 'border-red-500' : 'border-stone-800/50'
                  }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className='col-span-1'>
              <label className="block">
                Email Address <span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 bg-stone-900/50 border rounded-md ${errors.email ? 'border-red-500' : 'border-stone-800/50'
                  }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className='col-span-2'>
              <label className="block">
                Message for Customization <span className='text-stone-500 text-xs'>(Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-stone-900/50 border border-stone-800/50 rounded-md"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className={`mr-2 ${errors.agree ? 'border-red-500' : 'border-stone-800/50'
                  }`}
              />
              Do you agree to the terms & conditions and privacy policy?
            </label>
            {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
          </div>

          <button
            type="submit"
            className="bg-stone-200 text-stone-900 py-2 px-4 rounded-md text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
}
