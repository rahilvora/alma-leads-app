'use client';  // Add client directive since we're using form state

import { useState, FormEvent } from 'react';
import HeroSection from "@/app/components/shared/hero-section";
import AlmaLogo from "@/app/components/shared/alma-logo";
import {
  DocumentTextIcon,
  GlobeAmericasIcon,
  ChevronDownIcon,
  HeartIcon,
  PaperClipIcon
} from "@heroicons/react/24/outline";
import Button from "@/app/components/shared/button";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  url: string;
  visaCategories: string[];
  message: string;
  file: File | null;
}

interface ImmigrationFormProps {
  setOnSubmit: (value: boolean) => void;
}

const COUNTRIES = [
  { id: 'us', name: "United States" },
  { id: 'ca', name: "Canada" },
  { id: 'au', name: "Australia" },
  { id: 'nz', name: "New Zealand" },
] as const;

const VISA_CATEGORIES = [
  { id: 'o-1', label: 'O-1' },
  { id: 'eb-1a', label: 'EB-1A' },
  { id: 'eb-2', label: 'EB-2' },
  { id: 'eb-3', label: 'EB-3' },
  { id: 'eb-5', label: 'EB-5' },
  { id: 'niw', label: 'NIW' },
  { id: 'unknown', label: 'I do not know' },
] as const;

export default function ImmigrationForm({ setOnSubmit }: ImmigrationFormProps) {  // More descriptive component name
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    country: COUNTRIES[0].id,
    url: '',
    visaCategories: [],
    message: '',
    file: null,
  });
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const file = e.target.files?.[0];
    if (!file) {
      setFormData(prev => ({ ...prev, file: null }));
      return;
    }

    // Validate file to be less than 5MB
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    // Validate file type. Only PDF and Word documents are allowed.
    // TODO: Add support for other file types.
    const allowedTypes = ['application/pdf', 'application/msword'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a PDF or Word document');
      return;
    }

    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const submitData = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'visaCategories') {
          submitData.append(key, JSON.stringify(value)); // Convert array to JSON string
        } else if (key === 'resume' && value instanceof File) {
          submitData.append(key, value); // Append file directly as binary data
        } else {
          submitData.append(key, String(value)); // Append other fields as strings
        }
      });

      // TODO: Replace with your API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) throw new Error('Form submission failed');


      setOnSubmit(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVisaCategoryChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      visaCategories: prev.visaCategories.includes(category)
        ? prev.visaCategories.filter(c => c !== category)
        : [...prev.visaCategories, category]
    }));
  };

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection>
        <div className="flex flex-col items-center gap-2">
          <AlmaLogo />
          <h1 className="text-white">Get An Assessment of your Immigration Case</h1>
        </div>
      </HeroSection>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 p-12 max-w-4xl mx-auto w-full">
        <DocumentTextIcon className="size-24" />
        <h2 className="text-2xl font-bold">Want to understand your visa options?</h2>
        <p className="font-bold">Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.</p>

        <div className="border-gray-900/10 pb-12 w-full">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Personal Information Section */}
            <div className="sm:col-span-12">
              <label htmlFor="firstName" className="sr-only">First name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                autoComplete="given-name"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                required
              />
            </div>

            <div className="sm:col-span-12">
              <label htmlFor="lastName" className="sr-only">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-12">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-12">
              <label htmlFor="country" className="sr-only">Country</label>
              <div className="mt-2 grid grid-cols-1 relative">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="col-start-1 border border-gray-300 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  required
                >
                  {COUNTRIES.map(country => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-12">
              <label htmlFor="url" className="sr-only">
                url
              </label>
              <div className="mt-2">
                <input
                  id="url"
                  name="url"
                  type="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  placeholder="LinkedIn Profile URL"
                  autoComplete="url"
                  className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visa Categories Section */}
        <GlobeAmericasIcon className="size-24" />
        <h2 className="text-2xl font-bold">Visa categories of interest?</h2>
        <div className="grid grid-cols-1 gap-4 w-full">
          {VISA_CATEGORIES.map(category => (
            <div key={category.id} className="flex items-center gap-2 sm:col-span-12">
              <input
                type="checkbox"
                id={category.id}
                name="visaCategories"
                checked={formData.visaCategories.includes(category.id)}
                onChange={() => handleVisaCategoryChange(category.id)}
              />
              <label htmlFor={category.id}>{category.label}</label>
            </div>
          ))}
        </div>

        {/* File Upload Section */}
        <PaperClipIcon className="size-24" />
        <h2 className="text-2xl font-bold">Upload your resume</h2>
        <div className="w-full">
          <input type="file" onChange={handleFileChange} />
          {formData.file && (
            <p className="text-sm text-green-600">
              Selected file: {formData.file?.name}
            </p>
          )}
          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        {/* Message Section */}
        <HeartIcon className="size-24" />
        <h2 className="text-2xl font-bold">How can we help you?</h2>
        <div className="w-full">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How can we help you?"
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-12"
        >
          Submit
        </Button>
      </form>
    </main>
  );
}
