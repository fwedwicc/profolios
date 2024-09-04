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
  const featuresString = searchParams.get('features'); // Get the features string
  const features = featuresString ? JSON.parse(featuresString) : []; // Parse it into an array

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:p-12 p-6 md:px-36 md:pt-44 pt-36'
    >
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
        {/* Left Content */}
        <div className='lg:order-1 order-2 space-y-4'>
          <div className="relative md:h-[25rem] h-[14rem]">
            {image && <img src={image} alt={title} className="absolute object-cover w-full h-full rounded-lg" />}
          </div>
          <div className='space-y-5'>
            <div className='flex justify-between items-center'>
              <h2 className="leading-none text-2xl font-bold">{title}</h2>
              <p>{price}</p>
            </div>
            <p>{description}</p>
            <div className='space-y-3'>
              <p>Features:</p>
              <ul className='space-y-2'>
                {features.map((feature, index) => (
                  <li key={index} className='text-sm text-stone-300 flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                      <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <form onSubmit={handleSubmit} className="lg:order-2 order-1 self-start space-y-6">
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='md:col-span-2 col-span-1 space-y-1 mb-4'>
              <h3>Purchase Request</h3>
              <p>Please complete this form to help us process your purchase request.</p>
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
                Message for Customization <span className='text-stone-500 text-xs'>(Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={"(I'd like to update the color palette.)"}
                className="mt-1.5 block w-full py-2 px-3.5 md:text-sm text-xs bg-stone-900/50 placeholder:text-stone-600 text-stone-200 transition duration-300 ease-in-out border border-stone-800/50 rounded-md focus:ring-1 focus:ring-stone-300 focus:border-stone-300"
              />
            </div>
            {/* Checkbox for agreement */}
            <div className="md:col-span-2 col-span-1">
              <label className="flex items-start cursor-pointer md:leading-none leading-snug">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className={`mr-3.5 rounded-[4px] focus:ring-stone-800 focus:ring-2 text-stone-800 bg-stone-900/50 border border-stone-800/50 transition duration-300 ease-in-out ${errors.agree ? 'border-red-500' : 'border-stone-800/50'
                    }`}
                />
                Do you agree to the terms & conditions and privacy policy?
              </label>
              {errors.agree && <p className="text-red-500 md:text-sm text-xs mt-1">{errors.agree}</p>}
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-stone-200 hover:bg-stone-300 text-stone-950 font-semibold py-2 px-4 rounded-md text-sm transition duration-300 ease-in-out active:scale-95"
          >
            Submit request
          </button>
          {/* Note */}
          <div className='p-4 border border-stone-800/30 rounded-lg bg-stone-900/20'>
            <p><span className='text-stone-300'>Note:</span> After submitting your purchase request, we'll email you to proceed with the transaction. You can also request a preview link of your selected live site to help you make an informed decision.</p>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
