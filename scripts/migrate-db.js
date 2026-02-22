const mysql = require('mysql2/promise');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function migrateData() {
    console.log("Starting migration from MySQL to PostgreSQL...");

    // MySQL Connection
    const mysqlUrl = process.env.MYSQL_DATABASE_URL;
    if (!mysqlUrl) {
        console.error("MYSQL_DATABASE_URL is not defined in .env");
        process.exit(1);
    }

    const connection = await mysql.createConnection(mysqlUrl);
    console.log("Connected to MySQL successfully.");

    try {
        // 1. Migrate HeroSlide
        console.log("Migrating HeroSlides...");
        const [heroSlides] = await connection.execute('SELECT * FROM HeroSlide');
        for (const slide of heroSlides) {
            await prisma.heroSlide.create({
                data: {
                    id: slide.id,
                    title: slide.title,
                    subtitle: slide.subtitle,
                    desc: slide.desc,
                    image: slide.image,
                    createdAt: slide.createdAt,
                    updatedAt: slide.updatedAt
                }
            });
        }
        console.log(`Migrated ${heroSlides.length} HeroSlides.`);

        // 2. Migrate Contact
        console.log("Migrating Contacts...");
        const [contacts] = await connection.execute('SELECT * FROM Contact');
        for (const contact of contacts) {
            await prisma.contact.create({
                data: {
                    id: contact.id,
                    phone: contact.phone,
                    whatsapp: contact.whatsapp,
                    instagram: contact.instagram,
                    address: contact.address,
                    email: contact.email,
                    updatedAt: contact.updatedAt
                }
            });
        }
        console.log(`Migrated ${contacts.length} Contacts.`);

        // 3. Migrate Pricing
        console.log("Migrating Pricings...");
        const [pricings] = await connection.execute('SELECT * FROM Pricing');
        for (const pricing of pricings) {
            await prisma.pricing.create({
                data: {
                    id: pricing.id,
                    baseFee: pricing.baseFee,
                    standardRate: pricing.standardRate,
                    detailedRate: pricing.detailedRate,
                    roomRate: pricing.roomRate,
                    updatedAt: pricing.updatedAt
                }
            });
        }
        console.log(`Migrated ${pricings.length} Pricings.`);

        // 4. Migrate PricingExtra
        console.log("Migrating PricingExtras...");
        const [pricingExtras] = await connection.execute('SELECT * FROM PricingExtra');
        for (const extra of pricingExtras) {
            await prisma.pricingExtra.create({
                data: {
                    id: extra.id,
                    label: extra.label,
                    price: extra.price,
                    updatedAt: extra.updatedAt
                }
            });
        }
        console.log(`Migrated ${pricingExtras.length} PricingExtras.`);

        // 5. Migrate Service
        console.log("Migrating Services...");
        const [services] = await connection.execute('SELECT * FROM Service');
        for (const service of services) {
            await prisma.service.create({
                data: {
                    id: service.id,
                    title: service.title,
                    desc: service.desc,
                    img: service.img,
                    color: service.color,
                    multiplier: service.multiplier,
                    createdAt: service.createdAt,
                    updatedAt: service.updatedAt
                }
            });
        }
        console.log(`Migrated ${services.length} Services.`);

        // 6. Migrate BlogPost
        console.log("Migrating BlogPosts...");
        const [blogPosts] = await connection.execute('SELECT * FROM BlogPost');
        for (const post of blogPosts) {
            await prisma.blogPost.create({
                data: {
                    id: post.id,
                    title: post.title,
                    excerpt: post.excerpt,
                    content: post.content,
                    image: post.image,
                    date: post.date,
                    category: post.category,
                    createdAt: post.createdAt,
                    updatedAt: post.updatedAt
                }
            });
        }
        console.log(`Migrated ${blogPosts.length} BlogPosts.`);

        // 7. Migrate Project
        console.log("Migrating Projects...");
        const [projects] = await connection.execute('SELECT * FROM Project');
        for (const project of projects) {
            await prisma.project.create({
                data: {
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    category: project.category,
                    region: project.region,
                    imageBefore: project.imageBefore,
                    imageAfter: project.imageAfter,
                    createdAt: project.createdAt,
                    updatedAt: project.updatedAt
                }
            });
        }
        console.log(`Migrated ${projects.length} Projects.`);

        // 8. Migrate Review
        console.log("Migrating Reviews...");
        const [reviews] = await connection.execute('SELECT * FROM Review');
        for (const review of reviews) {
            await prisma.review.create({
                data: {
                    id: review.id,
                    name: review.name,
                    comment: review.comment,
                    rating: review.rating,
                    status: review.status,
                    reply: review.reply,
                    token: review.token,
                    date: review.date,
                    createdAt: review.createdAt,
                    updatedAt: review.updatedAt
                }
            });
        }
        console.log(`Migrated ${reviews.length} Reviews.`);

        console.log("Migration completed successfully!");

    } catch (error) {
        console.error("Error during migration:", error);
    } finally {
        await connection.end();
        await prisma.$disconnect();
    }
}

migrateData();
