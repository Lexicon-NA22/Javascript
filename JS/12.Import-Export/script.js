import Person from './2.Models/User.js';
import UserService from './3.Services/UserService.js';
import { validate as va, sendMessage } from './1.Functions/Functions.js';

const user = new Person('kAlLe', 'Anka', 'kalle@anka.com', 'BytMig123');
console.log(user);

va(user, (u) => UserService.signUp(u));

sendMessage('kalle', text => console.log(text));