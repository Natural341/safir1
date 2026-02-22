import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'Dosya bulunamadi' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename
        const ext = path.extname(file.name) || '.jpg';
        const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;

        // Ensure uploads directory exists
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadsDir, { recursive: true });

        // Write file
        const filePath = path.join(uploadsDir, uniqueName);
        await writeFile(filePath, buffer);

        return NextResponse.json({ url: `/uploads/${uniqueName}` });
    } catch (error) {
        console.error('Upload hatasi:', error);
        return NextResponse.json({ error: 'Dosya yuklenemedi' }, { status: 500 });
    }
}
