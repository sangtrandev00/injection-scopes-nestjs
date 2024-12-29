import { Injectable } from '@nestjs/common';
import { HelloService } from './hello/hello.service';

@Injectable()
export class AppService {


  constructor(private helloService: HelloService) { }

  getRoot(): string {
    this.helloService.sayHello('My name is getRoot');

    return 'Hello world!';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
