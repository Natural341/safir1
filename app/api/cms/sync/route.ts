import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Force-sync contact data in the database
export async function POST() {
    try {
        await prisma.contact.upsert({
            where: { id: 1 },
            update: {
                phone: "0 552 947 5313",
                whatsapp: "905529475313",
                instagram: "safirtemizlik.hizmetleri",
                address: "Atatürk Mah. Demokrasi Cad. Alaca Sk. No:37 Sancaktepe/İSTANBUL",
                email: "safir.temizlik.official@gmail.com"
            },
            create: {
                id: 1,
                phone: "0 552 947 5313",
                whatsapp: "905529475313",
                instagram: "safirtemizlik.hizmetleri",
                address: "Atatürk Mah. Demokrasi Cad. Alaca Sk. No:37 Sancaktepe/İSTANBUL",
                email: "safir.temizlik.official@gmail.com"
            }
        });

        return NextResponse.json({ success: true, message: 'Iletisim bilgileri guncellendi' });
    } catch (error) {
        console.error('Sync hatasi:', error);
        return NextResponse.json({ error: 'Guncelleme hatasi' }, { status: 500 });
    }
}
