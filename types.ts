
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
}

export interface AIQuoteResponse {
  planName: string;
  estimatedPrice: string;
  recommendations: string[];
}