'use client';
import { useState, FormEvent } from 'react';
import ImmigrationForm from "@/app/components/form/immigration-form";
import SubmitSuccess from '../components/form/submit-success';


export default function FormPage() {
  const [onSubmit, setOnSubmit] = useState(false);
  if (onSubmit) {
    return (
      <SubmitSuccess />
    );
  }
  else {
    return (
      <ImmigrationForm setOnSubmit={setOnSubmit} />
    );
  }
}
