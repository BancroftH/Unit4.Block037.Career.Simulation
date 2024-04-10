const faker = require('faker');
const bcrypt = require('bcryptjs');
const db = require('./index');

// Generate dummy user data
const generateUserData = () => {
    const users = [];
    for (let i = 0; i < 10; i++) {
        const user = {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync(faker.internet.password())
        };
        users.push(user);
    }
    return(users);
};

// Generate Dummy user reviews
const generateReviewData = (users) => {
    const reviews = [];
    for (let i = 0; i < 20; i++) {
        const review = {
            rating: faker.datatype.number({ min: 1, max: 5 }),
            text: faker.lorem.paragraph(),
            itemId: faker.datatype.number({ min: 1, max: 100 }),
            userId: i % 10 + 1
        };
        reviews.push(review);
    }
    return reviews;
};

// Seed db function
const seed = async () => {
    try {
        // Generate dummy user data
        const users = await db.user.createMany({ data: generateUserData() });

        // Generate dummy reviews
        const reviews  = await db.review.createMany({ data: generateReviewData(users)});

        console.log('Database seeded successfully...');
    } catch (error) {
        console.error('Error seeding database...', error);
    } finally {
      await db.$disconnect();
    }
}

//  run cmd -- node server/db/seed.js -- to seed db
seed();