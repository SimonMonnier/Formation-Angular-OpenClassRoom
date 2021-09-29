import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
      {
          firstName: 'Simon',
          lastName: 'Monnier',
          email: 's.monnier44440@gpasdemail.com',
          drinkPreference: 'Café',
          hobbies: [
              'coder',
              'décoder',
              'recoder',
              'redécoder'
          ]
      },
      {
        firstName: 'Si',
        lastName: 'Mon',
        email: 'si.mon@gpasdemail.com',
        drinkPreference: 'Thé',
        hobbies: [
            'encoder',
            'désencoder',
            'réencoder',
            'redéencoder'
        ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}