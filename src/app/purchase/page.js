'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import emailjs from 'emailjs-com';

export default function Purchase() {
  const searchParams = useSearchParams();
  const image = searchParams.get('image');
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const price = searchParams.get('price');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Complete name is required.';
    if (!formData.email) {
      formErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid.';
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
      // Send email using EmailJS
      emailjs
        .send(
          'service_e3j4b2l', // Replace with your EmailJS service ID
          'template_csx77pr', // Replace with your EmailJS template ID
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            itemTitle: title,
            itemPrice: price,
            itemDescription: description,
          },
          'U9j3EnuZPJPEjbg6d' // Replace with your EmailJS user ID
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
    <div className='p-12'>
      <h1>Purchase</h1>
      <p>This page contains purchase page contents.</p>
      <div className="relative h-full">
        {image && <img src={image} alt={title} className="absolute object-cover w-full h-full rounded-lg" />}
      </div>
      <div className=''>
        <h2 className="leading-none text-2xl font-bold">{title}</h2>
        <p className="">{description}</p>
        <p className="">{price}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-8">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Complete Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message for Customization (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
