import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPersonQuery } from './queries/impl/get-person.query';
import { CreatePersonCommand } from './commands/impl/create-person.command';

@Controller('person')
export class PersonController {
    constructor(
        private queryBus: QueryBus,
        private commandBus: CommandBus
    ) {}

    @Get('all')
    async getAll(){
        return this.queryBus.execute(new GetPersonQuery())
    }

    @Post('add')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform : true}))
    async save(@Body() payload: CreatePersonCommand) {
        await this.commandBus.execute(payload);
    }
}
