import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { AaaService } from './aaa/aaa.service';

@Injectable()
export class TaskService {
  @Inject(AaaService)
  private readonly appService: AaaService;

  @Cron(CronExpression.EVERY_10_SECONDS, {
    name: 'task1',
    timeZone: 'Asia/Shanghai', // 时区
  })
  handleCron() {
    this.appService.getHello();
    console.log('每10s 运行一次');
  }

  @Interval('task2', 5000)
  handleInterval() {
    console.log('每 5000ms 运行一次');
  }

  @Timeout('task3', 3000)
  handleTimeout() {
    console.log('3000ms 后运行一次');
  }
}
