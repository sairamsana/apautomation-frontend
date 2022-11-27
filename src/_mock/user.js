import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(8)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample(['HomeDepoBill', '1159 Frans', 'london heat center', 'shortage bill', 'Heater']),
  company: sample(['IT','Home','Furniture']),
  isVerified: faker.datatype.boolean(),
  status: sample(['pending', 'review','approved','rejected']),
  role: sample([
    'Ikea', 'Home Depo', 'Canada Tyre'
  ]),
}));

export default users;
