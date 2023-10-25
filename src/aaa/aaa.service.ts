import { Injectable } from '@nestjs/common';

@Injectable()
export class AaaService {
  getHello() {
    console.log('Hello~');
  }
}
