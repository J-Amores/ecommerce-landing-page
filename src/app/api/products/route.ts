import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import { Product } from '@/types';

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public', 'api');
    const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    const products: Product[] = JSON.parse(fileContents);
    
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load products' },
      { status: 500 }
    );
  }
}