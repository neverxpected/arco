'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type ClassCategory = 'All' | 'Strength' | 'HIIT' | 'Yoga' | 'Pilates' | 'Dance' | 'Conditioning';

interface FitnessClass {
  name: string;
  category: ClassCategory;
  description: string;
  icon: string;
}
