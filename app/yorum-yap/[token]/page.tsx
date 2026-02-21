"use client";

import React from 'react';
import ReviewForm from '@/components/ReviewForm';
import { useParams } from 'next/navigation';

export default function ReviewPage() {
  const params = useParams();
  const token = params.token as string;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <ReviewForm token={token} />
    </div>
  );
}
