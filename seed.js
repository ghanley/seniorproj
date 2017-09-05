var db = require('./db');
var {Campus} = require('./db/models');
var {Student} = require('./db/models');


const Campuses = [{
  name: 'UGA',
  image: '/images/arch.jpg'
}, {
  name: 'BAMA',
  image: '/images/bama.jpg'
}, {
  name: 'LSU',
  image: '/images/lsu.jpg'
},{
  name: 'FSU',
  image: '/images/FSU.jpg'
}
]


const Students = [
  {campusId: 1, name: 'Greg', email: 'fake@fake.com'},
  {campusId: 2, name: 'Zeke', email: 'zeke@zeke.com'},
  {campusId: 2, name: 'Jules', email: 'jfj@zeke.com'},
  {campusId: 3, name: 'Abe', email: 'fffff@zeke.com'},
  {campusId: 4, name: 'Danny', email: 'mother@dragons.com'},
  {campusId: 4, name: 'Testy', email: 'test@test.com'}
]

const seed = () =>
Promise.all(Campuses.map(campus =>
  Campus.create(campus))
)
.then(() =>
Promise.all(Students.map(student =>
  Student.create(student))
)
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();




// function seed () {
//   return createCampus()
//   .then(function (createdCampus) {
//     return createStories(createdUsers);
//   });
// }


// db.sync({force: true})
// .then(function () {
//   console.log('Seeding database');
//   return seed()})
